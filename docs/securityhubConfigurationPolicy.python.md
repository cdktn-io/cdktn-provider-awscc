# `securityhubConfigurationPolicy` Submodule <a name="`securityhubConfigurationPolicy` Submodule" id="@cdktn/provider-awscc.securityhubConfigurationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConfigurationPolicy <a name="SecurityhubConfigurationPolicy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy awscc_securityhub_configuration_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_policy: SecurityhubConfigurationPolicyConfigurationPolicy,
  name: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.configurationPolicy">configuration_policy</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | An object that defines how Security Hub is configured. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_policy`<sup>Required</sup> <a name="configuration_policy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.configurationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

An object that defines how Security Hub is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#configuration_policy SecurityhubConfigurationPolicy#configuration_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.description"></a>

- *Type:* str

The description of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#tags SecurityhubConfigurationPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy">put_configuration_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration_policy` <a name="put_configuration_policy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy"></a>

```python
def put_configuration_policy(
  security_hub: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub = None
) -> None
```

###### `security_hub`<sup>Optional</sup> <a name="security_hub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy.parameter.securityHub"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

An object that defines how AWS Security Hub is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#security_hub SecurityhubConfigurationPolicy#security_hub}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubConfigurationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubConfigurationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConfigurationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy">configuration_policy</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyId">configuration_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.serviceEnabled">service_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput">configuration_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration_policy`<sup>Required</sup> <a name="configuration_policy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy"></a>

```python
configuration_policy: SecurityhubConfigurationPolicyConfigurationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a>

---

##### `configuration_policy_id`<sup>Required</sup> <a name="configuration_policy_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyId"></a>

```python
configuration_policy_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_enabled`<sup>Required</sup> <a name="service_enabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.serviceEnabled"></a>

```python
service_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `configuration_policy_input`<sup>Optional</sup> <a name="configuration_policy_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput"></a>

```python
configuration_policy_input: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConfigurationPolicyConfig <a name="SecurityhubConfigurationPolicyConfig" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_policy: SecurityhubConfigurationPolicyConfigurationPolicy,
  name: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy">configuration_policy</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | An object that defines how Security Hub is configured. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_policy`<sup>Required</sup> <a name="configuration_policy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy"></a>

```python
configuration_policy: SecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

An object that defines how Security Hub is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#configuration_policy SecurityhubConfigurationPolicy#configuration_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#tags SecurityhubConfigurationPolicy#tags}

---

### SecurityhubConfigurationPolicyConfigurationPolicy <a name="SecurityhubConfigurationPolicyConfigurationPolicy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy(
  security_hub: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityHub">security_hub</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a></code> | An object that defines how AWS Security Hub is configured. |

---

##### `security_hub`<sup>Optional</sup> <a name="security_hub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityHub"></a>

```python
security_hub: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

An object that defines how AWS Security Hub is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#security_hub SecurityhubConfigurationPolicy#security_hub}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHub <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub(
  enabled_standard_identifiers: typing.List[str] = None,
  security_controls_configuration: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration = None,
  service_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.enabledStandardIdentifiers">enabled_standard_identifiers</a></code> | <code>typing.List[str]</code> | A list that defines which security standards are enabled in the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.securityControlsConfiguration">security_controls_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a></code> | An object that defines which security controls are enabled in an AWS Security Hub configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.serviceEnabled">service_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether Security Hub is enabled in the policy. |

---

##### `enabled_standard_identifiers`<sup>Optional</sup> <a name="enabled_standard_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.enabledStandardIdentifiers"></a>

```python
enabled_standard_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

A list that defines which security standards are enabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enabled_standard_identifiers SecurityhubConfigurationPolicy#enabled_standard_identifiers}

---

##### `security_controls_configuration`<sup>Optional</sup> <a name="security_controls_configuration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.securityControlsConfiguration"></a>

```python
security_controls_configuration: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

An object that defines which security controls are enabled in an AWS Security Hub configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#security_controls_configuration SecurityhubConfigurationPolicy#security_controls_configuration}

---

##### `service_enabled`<sup>Optional</sup> <a name="service_enabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.serviceEnabled"></a>

```python
service_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether Security Hub is enabled in the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration(
  disabled_security_control_identifiers: typing.List[str] = None,
  enabled_security_control_identifiers: typing.List[str] = None,
  security_control_custom_parameters: IResolvable | typing.List[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.disabledSecurityControlIdentifiers">disabled_security_control_identifiers</a></code> | <code>typing.List[str]</code> | A list of security controls that are disabled in the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.enabledSecurityControlIdentifiers">enabled_security_control_identifiers</a></code> | <code>typing.List[str]</code> | A list of security controls that are enabled in the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.securityControlCustomParameters">security_control_custom_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]</code> | A list of security controls and control parameter values that are included in a configuration policy. |

---

##### `disabled_security_control_identifiers`<sup>Optional</sup> <a name="disabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.disabledSecurityControlIdentifiers"></a>

```python
disabled_security_control_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

A list of security controls that are disabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#disabled_security_control_identifiers SecurityhubConfigurationPolicy#disabled_security_control_identifiers}

---

##### `enabled_security_control_identifiers`<sup>Optional</sup> <a name="enabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.enabledSecurityControlIdentifiers"></a>

```python
enabled_security_control_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

A list of security controls that are enabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enabled_security_control_identifiers SecurityhubConfigurationPolicy#enabled_security_control_identifiers}

---

##### `security_control_custom_parameters`<sup>Optional</sup> <a name="security_control_custom_parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.securityControlCustomParameters"></a>

```python
security_control_custom_parameters: IResolvable | typing.List[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]

A list of security controls and control parameter values that are included in a configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#security_control_custom_parameters SecurityhubConfigurationPolicy#security_control_custom_parameters}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters(
  parameters: IResolvable | typing.Mapping[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters] = None,
  security_control_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>]</code> | An object that specifies parameter values for a control in a configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.securityControlId">security_control_id</a></code> | <code>str</code> | The ID of the security control. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.parameters"></a>

```python
parameters: IResolvable | typing.Mapping[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>]

An object that specifies parameter values for a control in a configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#parameters SecurityhubConfigurationPolicy#parameters}

---

##### `security_control_id`<sup>Optional</sup> <a name="security_control_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

The ID of the security control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters(
  value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a></code> | An object that includes the data type of a security control parameter and its current value. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.valueType">value_type</a></code> | <code>str</code> | Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.value"></a>

```python
value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a>

An object that includes the data type of a security control parameter and its current value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue(
  boolean: bool | IResolvable = None,
  double: typing.Union[int, float] = None,
  enum: str = None,
  enum_list: typing.List[str] = None,
  integer: typing.Union[int, float] = None,
  integer_list: typing.List[typing.Union[int, float]] = None,
  string: str = None,
  string_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.boolean">boolean</a></code> | <code>bool \| cdktn.IResolvable</code> | A control parameter that is a boolean. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.double">double</a></code> | <code>typing.Union[int, float]</code> | A control parameter that is a double. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enum">enum</a></code> | <code>str</code> | A control parameter that is an enum. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enumList">enum_list</a></code> | <code>typing.List[str]</code> | A control parameter that is a list of enums. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integer">integer</a></code> | <code>typing.Union[int, float]</code> | A control parameter that is an integer. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integerList">integer_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A control parameter that is a list of integers. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.string">string</a></code> | <code>str</code> | A control parameter that is a string. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | A control parameter that is a list of strings. |

---

##### `boolean`<sup>Optional</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.boolean"></a>

```python
boolean: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#boolean SecurityhubConfigurationPolicy#boolean}

---

##### `double`<sup>Optional</sup> <a name="double" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.double"></a>

```python
double: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#double SecurityhubConfigurationPolicy#double}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enum"></a>

```python
enum: str
```

- *Type:* str

A control parameter that is an enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enum SecurityhubConfigurationPolicy#enum}

---

##### `enum_list`<sup>Optional</sup> <a name="enum_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enumList"></a>

```python
enum_list: typing.List[str]
```

- *Type:* typing.List[str]

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enum_list SecurityhubConfigurationPolicy#enum_list}

---

##### `integer`<sup>Optional</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integer"></a>

```python
integer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A control parameter that is an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#integer SecurityhubConfigurationPolicy#integer}

---

##### `integer_list`<sup>Optional</sup> <a name="integer_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integerList"></a>

```python
integer_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#integer_list SecurityhubConfigurationPolicy#integer_list}

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.string"></a>

```python
string: str
```

- *Type:* str

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#string SecurityhubConfigurationPolicy#string}

---

##### `string_list`<sup>Optional</sup> <a name="string_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#string_list SecurityhubConfigurationPolicy#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConfigurationPolicyConfigurationPolicyOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicyOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub">put_security_hub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityHub">reset_security_hub</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_security_hub` <a name="put_security_hub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub"></a>

```python
def put_security_hub(
  enabled_standard_identifiers: typing.List[str] = None,
  security_controls_configuration: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration = None,
  service_enabled: bool | IResolvable = None
) -> None
```

###### `enabled_standard_identifiers`<sup>Optional</sup> <a name="enabled_standard_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub.parameter.enabledStandardIdentifiers"></a>

- *Type:* typing.List[str]

A list that defines which security standards are enabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enabled_standard_identifiers SecurityhubConfigurationPolicy#enabled_standard_identifiers}

---

###### `security_controls_configuration`<sup>Optional</sup> <a name="security_controls_configuration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub.parameter.securityControlsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

An object that defines which security controls are enabled in an AWS Security Hub configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#security_controls_configuration SecurityhubConfigurationPolicy#security_controls_configuration}

---

###### `service_enabled`<sup>Optional</sup> <a name="service_enabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub.parameter.serviceEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether Security Hub is enabled in the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}

---

##### `reset_security_hub` <a name="reset_security_hub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityHub"></a>

```python
def reset_security_hub() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub">security_hub</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHubInput">security_hub_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_hub`<sup>Required</sup> <a name="security_hub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub"></a>

```python
security_hub: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a>

---

##### `security_hub_input`<sup>Optional</sup> <a name="security_hub_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHubInput"></a>

```python
security_hub_input: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration">put_security_controls_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetEnabledStandardIdentifiers">reset_enabled_standard_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetSecurityControlsConfiguration">reset_security_controls_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetServiceEnabled">reset_service_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_security_controls_configuration` <a name="put_security_controls_configuration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration"></a>

```python
def put_security_controls_configuration(
  disabled_security_control_identifiers: typing.List[str] = None,
  enabled_security_control_identifiers: typing.List[str] = None,
  security_control_custom_parameters: IResolvable | typing.List[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters] = None
) -> None
```

###### `disabled_security_control_identifiers`<sup>Optional</sup> <a name="disabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration.parameter.disabledSecurityControlIdentifiers"></a>

- *Type:* typing.List[str]

A list of security controls that are disabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#disabled_security_control_identifiers SecurityhubConfigurationPolicy#disabled_security_control_identifiers}

---

###### `enabled_security_control_identifiers`<sup>Optional</sup> <a name="enabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration.parameter.enabledSecurityControlIdentifiers"></a>

- *Type:* typing.List[str]

A list of security controls that are enabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enabled_security_control_identifiers SecurityhubConfigurationPolicy#enabled_security_control_identifiers}

---

###### `security_control_custom_parameters`<sup>Optional</sup> <a name="security_control_custom_parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration.parameter.securityControlCustomParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]

A list of security controls and control parameter values that are included in a configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#security_control_custom_parameters SecurityhubConfigurationPolicy#security_control_custom_parameters}

---

##### `reset_enabled_standard_identifiers` <a name="reset_enabled_standard_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetEnabledStandardIdentifiers"></a>

```python
def reset_enabled_standard_identifiers() -> None
```

##### `reset_security_controls_configuration` <a name="reset_security_controls_configuration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetSecurityControlsConfiguration"></a>

```python
def reset_security_controls_configuration() -> None
```

##### `reset_service_enabled` <a name="reset_service_enabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetServiceEnabled"></a>

```python
def reset_service_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration">security_controls_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiersInput">enabled_standard_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfigurationInput">security_controls_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabledInput">service_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers">enabled_standard_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled">service_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_controls_configuration`<sup>Required</sup> <a name="security_controls_configuration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration"></a>

```python
security_controls_configuration: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a>

---

##### `enabled_standard_identifiers_input`<sup>Optional</sup> <a name="enabled_standard_identifiers_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiersInput"></a>

```python
enabled_standard_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_controls_configuration_input`<sup>Optional</sup> <a name="security_controls_configuration_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfigurationInput"></a>

```python
security_controls_configuration_input: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

---

##### `service_enabled_input`<sup>Optional</sup> <a name="service_enabled_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabledInput"></a>

```python
service_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled_standard_identifiers`<sup>Required</sup> <a name="enabled_standard_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers"></a>

```python
enabled_standard_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_enabled`<sup>Required</sup> <a name="service_enabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled"></a>

```python
service_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.putSecurityControlCustomParameters">put_security_control_custom_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetDisabledSecurityControlIdentifiers">reset_disabled_security_control_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetEnabledSecurityControlIdentifiers">reset_enabled_security_control_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameters">reset_security_control_custom_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_security_control_custom_parameters` <a name="put_security_control_custom_parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.putSecurityControlCustomParameters"></a>

```python
def put_security_control_custom_parameters(
  value: IResolvable | typing.List[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.putSecurityControlCustomParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]

---

##### `reset_disabled_security_control_identifiers` <a name="reset_disabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetDisabledSecurityControlIdentifiers"></a>

```python
def reset_disabled_security_control_identifiers() -> None
```

##### `reset_enabled_security_control_identifiers` <a name="reset_enabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetEnabledSecurityControlIdentifiers"></a>

```python
def reset_enabled_security_control_identifiers() -> None
```

##### `reset_security_control_custom_parameters` <a name="reset_security_control_custom_parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameters"></a>

```python
def reset_security_control_custom_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters">security_control_custom_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiersInput">disabled_security_control_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiersInput">enabled_security_control_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParametersInput">security_control_custom_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers">disabled_security_control_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers">enabled_security_control_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_control_custom_parameters`<sup>Required</sup> <a name="security_control_custom_parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters"></a>

```python
security_control_custom_parameters: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a>

---

##### `disabled_security_control_identifiers_input`<sup>Optional</sup> <a name="disabled_security_control_identifiers_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiersInput"></a>

```python
disabled_security_control_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_security_control_identifiers_input`<sup>Optional</sup> <a name="enabled_security_control_identifiers_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiersInput"></a>

```python
enabled_security_control_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_control_custom_parameters_input`<sup>Optional</sup> <a name="security_control_custom_parameters_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParametersInput"></a>

```python
security_control_custom_parameters_input: IResolvable | typing.List[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]

---

##### `disabled_security_control_identifiers`<sup>Required</sup> <a name="disabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers"></a>

```python
disabled_security_control_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_security_control_identifiers`<sup>Required</sup> <a name="enabled_security_control_identifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers"></a>

```python
enabled_security_control_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>]

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetSecurityControlId">reset_security_control_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.Mapping[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_security_control_id` <a name="reset_security_control_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetSecurityControlId"></a>

```python
def reset_security_control_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlIdInput">security_control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId">security_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters"></a>

```python
parameters: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.Mapping[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>]

---

##### `security_control_id_input`<sup>Optional</sup> <a name="security_control_id_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlIdInput"></a>

```python
security_control_id_input: str
```

- *Type:* str

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get"></a>

```python
def get(
  key: str
) -> SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>]

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue"></a>

```python
def put_value(
  boolean: bool | IResolvable = None,
  double: typing.Union[int, float] = None,
  enum: str = None,
  enum_list: typing.List[str] = None,
  integer: typing.Union[int, float] = None,
  integer_list: typing.List[typing.Union[int, float]] = None,
  string: str = None,
  string_list: typing.List[str] = None
) -> None
```

###### `boolean`<sup>Optional</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.boolean"></a>

- *Type:* bool | cdktn.IResolvable

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#boolean SecurityhubConfigurationPolicy#boolean}

---

###### `double`<sup>Optional</sup> <a name="double" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.double"></a>

- *Type:* typing.Union[int, float]

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#double SecurityhubConfigurationPolicy#double}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.enum"></a>

- *Type:* str

A control parameter that is an enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enum SecurityhubConfigurationPolicy#enum}

---

###### `enum_list`<sup>Optional</sup> <a name="enum_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.enumList"></a>

- *Type:* typing.List[str]

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#enum_list SecurityhubConfigurationPolicy#enum_list}

---

###### `integer`<sup>Optional</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.integer"></a>

- *Type:* typing.Union[int, float]

A control parameter that is an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#integer SecurityhubConfigurationPolicy#integer}

---

###### `integer_list`<sup>Optional</sup> <a name="integer_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.integerList"></a>

- *Type:* typing.List[typing.Union[int, float]]

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#integer_list SecurityhubConfigurationPolicy#integer_list}

---

###### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.string"></a>

- *Type:* str

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#string SecurityhubConfigurationPolicy#string}

---

###### `string_list`<sup>Optional</sup> <a name="string_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.stringList"></a>

- *Type:* typing.List[str]

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityhub_configuration_policy#string_list SecurityhubConfigurationPolicy#string_list}

---

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value"></a>

```python
value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a>

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_configuration_policy

securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetBoolean">reset_boolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetDouble">reset_double</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnumList">reset_enum_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetInteger">reset_integer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetIntegerList">reset_integer_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetString">reset_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetStringList">reset_string_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean` <a name="reset_boolean" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetBoolean"></a>

```python
def reset_boolean() -> None
```

##### `reset_double` <a name="reset_double" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetDouble"></a>

```python
def reset_double() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_enum_list` <a name="reset_enum_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnumList"></a>

```python
def reset_enum_list() -> None
```

##### `reset_integer` <a name="reset_integer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetInteger"></a>

```python
def reset_integer() -> None
```

##### `reset_integer_list` <a name="reset_integer_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetIntegerList"></a>

```python
def reset_integer_list() -> None
```

##### `reset_string` <a name="reset_string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetString"></a>

```python
def reset_string() -> None
```

##### `reset_string_list` <a name="reset_string_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetStringList"></a>

```python
def reset_string_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.booleanInput">boolean_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.doubleInput">double_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumInput">enum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumListInput">enum_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerInput">integer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerListInput">integer_list_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringInput">string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringListInput">string_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean">boolean</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double">double</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum">enum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList">enum_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer">integer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList">integer_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string">string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_input`<sup>Optional</sup> <a name="boolean_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.booleanInput"></a>

```python
boolean_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double_input`<sup>Optional</sup> <a name="double_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.doubleInput"></a>

```python
double_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumInput"></a>

```python
enum_input: str
```

- *Type:* str

---

##### `enum_list_input`<sup>Optional</sup> <a name="enum_list_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumListInput"></a>

```python
enum_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integer_input`<sup>Optional</sup> <a name="integer_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerInput"></a>

```python
integer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integer_list_input`<sup>Optional</sup> <a name="integer_list_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerListInput"></a>

```python
integer_list_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `string_input`<sup>Optional</sup> <a name="string_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringInput"></a>

```python
string_input: str
```

- *Type:* str

---

##### `string_list_input`<sup>Optional</sup> <a name="string_list_input" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringListInput"></a>

```python
string_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `boolean`<sup>Required</sup> <a name="boolean" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean"></a>

```python
boolean: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `double`<sup>Required</sup> <a name="double" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double"></a>

```python
double: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum"></a>

```python
enum: str
```

- *Type:* str

---

##### `enum_list`<sup>Required</sup> <a name="enum_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList"></a>

```python
enum_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integer`<sup>Required</sup> <a name="integer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer"></a>

```python
integer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integer_list`<sup>Required</sup> <a name="integer_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList"></a>

```python
integer_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string"></a>

```python
string: str
```

- *Type:* str

---

##### `string_list`<sup>Required</sup> <a name="string_list" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a>

---



