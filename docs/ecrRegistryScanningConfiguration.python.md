# `ecrRegistryScanningConfiguration` Submodule <a name="`ecrRegistryScanningConfiguration` Submodule" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRegistryScanningConfiguration <a name="EcrRegistryScanningConfiguration" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration awscc_ecr_registry_scanning_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rules: IResolvable | typing.List[EcrRegistryScanningConfigurationRules],
  scan_type: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]</code> | The scanning rules associated with the registry. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scanType">scan_type</a></code> | <code>str</code> | The type of scanning configured for the registry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]

The scanning rules associated with the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#rules EcrRegistryScanningConfiguration#rules}

---

##### `scan_type`<sup>Required</sup> <a name="scan_type" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scanType"></a>

- *Type:* str

The type of scanning configured for the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules">put_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[EcrRegistryScanningConfigurationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcrRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcrRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcrRegistryScanningConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcrRegistryScanningConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrRegistryScanningConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList">EcrRegistryScanningConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput">scan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType">scan_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rules"></a>

```python
rules: EcrRegistryScanningConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList">EcrRegistryScanningConfigurationRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[EcrRegistryScanningConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]

---

##### `scan_type_input`<sup>Optional</sup> <a name="scan_type_input" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput"></a>

```python
scan_type_input: str
```

- *Type:* str

---

##### `scan_type`<sup>Required</sup> <a name="scan_type" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType"></a>

```python
scan_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRegistryScanningConfigurationConfig <a name="EcrRegistryScanningConfigurationConfig" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rules: IResolvable | typing.List[EcrRegistryScanningConfigurationRules],
  scan_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]</code> | The scanning rules associated with the registry. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType">scan_type</a></code> | <code>str</code> | The type of scanning configured for the registry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[EcrRegistryScanningConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]

The scanning rules associated with the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#rules EcrRegistryScanningConfiguration#rules}

---

##### `scan_type`<sup>Required</sup> <a name="scan_type" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType"></a>

```python
scan_type: str
```

- *Type:* str

The type of scanning configured for the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}

---

### EcrRegistryScanningConfigurationRules <a name="EcrRegistryScanningConfigurationRules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules(
  repository_filters: IResolvable | typing.List[EcrRegistryScanningConfigurationRulesRepositoryFilters],
  scan_frequency: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.repositoryFilters">repository_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>]</code> | The details of a scanning repository filter. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.scanFrequency">scan_frequency</a></code> | <code>str</code> | The frequency that scans are performed at for a private registry. |

---

##### `repository_filters`<sup>Required</sup> <a name="repository_filters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.repositoryFilters"></a>

```python
repository_filters: IResolvable | typing.List[EcrRegistryScanningConfigurationRulesRepositoryFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>]

The details of a scanning repository filter.

For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#repository_filters EcrRegistryScanningConfiguration#repository_filters}

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.scanFrequency"></a>

```python
scan_frequency: str
```

- *Type:* str

The frequency that scans are performed at for a private registry.

When the `ENHANCED` scan type is specified, the supported scan frequencies are `CONTINUOUS_SCAN` and `SCAN_ON_PUSH`. When the `BASIC` scan type is specified, the `SCAN_ON_PUSH` scan frequency is supported. If scan on push is not specified, then the `MANUAL` scan frequency is set by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}

---

### EcrRegistryScanningConfigurationRulesRepositoryFilters <a name="EcrRegistryScanningConfigurationRulesRepositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters(
  filter: str,
  filter_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filter">filter</a></code> | <code>str</code> | The filter to use when scanning. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filterType">filter_type</a></code> | <code>str</code> | The type associated with the filter. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to use when scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

The type associated with the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRegistryScanningConfigurationRulesList <a name="EcrRegistryScanningConfigurationRulesList" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRegistryScanningConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrRegistryScanningConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>]

---


### EcrRegistryScanningConfigurationRulesOutputReference <a name="EcrRegistryScanningConfigurationRulesOutputReference" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters">put_repository_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repository_filters` <a name="put_repository_filters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters"></a>

```python
def put_repository_filters(
  value: IResolvable | typing.List[EcrRegistryScanningConfigurationRulesRepositoryFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFilters">repository_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList">EcrRegistryScanningConfigurationRulesRepositoryFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFiltersInput">repository_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequencyInput">scan_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequency">scan_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_filters`<sup>Required</sup> <a name="repository_filters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFilters"></a>

```python
repository_filters: EcrRegistryScanningConfigurationRulesRepositoryFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList">EcrRegistryScanningConfigurationRulesRepositoryFiltersList</a>

---

##### `repository_filters_input`<sup>Optional</sup> <a name="repository_filters_input" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFiltersInput"></a>

```python
repository_filters_input: IResolvable | typing.List[EcrRegistryScanningConfigurationRulesRepositoryFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>]

---

##### `scan_frequency_input`<sup>Optional</sup> <a name="scan_frequency_input" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequencyInput"></a>

```python
scan_frequency_input: str
```

- *Type:* str

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequency"></a>

```python
scan_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRegistryScanningConfigurationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>

---


### EcrRegistryScanningConfigurationRulesRepositoryFiltersList <a name="EcrRegistryScanningConfigurationRulesRepositoryFiltersList" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcrRegistryScanningConfigurationRulesRepositoryFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>]

---


### EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference <a name="EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcrRegistryScanningConfigurationRulesRepositoryFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>

---



