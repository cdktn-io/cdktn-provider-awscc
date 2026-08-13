# `elasticbeanstalkApplication` Submodule <a name="`elasticbeanstalkApplication` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkApplication <a name="ElasticbeanstalkApplication" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application awscc_elasticbeanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str = None,
  description: str = None,
  resource_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | A name for the Elastic Beanstalk application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Your description of the application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.resourceLifecycleConfig">resource_lifecycle_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Optional</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.applicationName"></a>

- *Type:* str

A name for the Elastic Beanstalk application.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#application_name ElasticbeanstalkApplication#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.description"></a>

- *Type:* str

Your description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#description ElasticbeanstalkApplication#description}

---

##### `resource_lifecycle_config`<sup>Optional</sup> <a name="resource_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.resourceLifecycleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#resource_lifecycle_config ElasticbeanstalkApplication#resource_lifecycle_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig">put_resource_lifecycle_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetApplicationName">reset_application_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetResourceLifecycleConfig">reset_resource_lifecycle_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_lifecycle_config` <a name="put_resource_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig"></a>

```python
def put_resource_lifecycle_config(
  service_role: str = None,
  version_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig = None
) -> None
```

###### `service_role`<sup>Optional</sup> <a name="service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig.parameter.serviceRole"></a>

- *Type:* str

The ARN of an IAM service role that Elastic Beanstalk has permission to assume.

The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#service_role ElasticbeanstalkApplication#service_role}

---

###### `version_lifecycle_config`<sup>Optional</sup> <a name="version_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig.parameter.versionLifecycleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

Defines lifecycle settings for application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#version_lifecycle_config ElasticbeanstalkApplication#version_lifecycle_config}

---

##### `reset_application_name` <a name="reset_application_name" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetApplicationName"></a>

```python
def reset_application_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_resource_lifecycle_config` <a name="reset_resource_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetResourceLifecycleConfig"></a>

```python
def reset_resource_lifecycle_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticbeanstalkApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticbeanstalkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfig">resource_lifecycle_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfigInput">resource_lifecycle_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.description">description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_lifecycle_config`<sup>Required</sup> <a name="resource_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfig"></a>

```python
resource_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a>

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `resource_lifecycle_config_input`<sup>Optional</sup> <a name="resource_lifecycle_config_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfigInput"></a>

```python
resource_lifecycle_config_input: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkApplicationConfig <a name="ElasticbeanstalkApplicationConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str = None,
  description: str = None,
  resource_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.applicationName">application_name</a></code> | <code>str</code> | A name for the Elastic Beanstalk application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.description">description</a></code> | <code>str</code> | Your description of the application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.resourceLifecycleConfig">resource_lifecycle_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Optional</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

A name for the Elastic Beanstalk application.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#application_name ElasticbeanstalkApplication#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Your description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#description ElasticbeanstalkApplication#description}

---

##### `resource_lifecycle_config`<sup>Optional</sup> <a name="resource_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.resourceLifecycleConfig"></a>

```python
resource_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#resource_lifecycle_config ElasticbeanstalkApplication#resource_lifecycle_config}

---

### ElasticbeanstalkApplicationResourceLifecycleConfig <a name="ElasticbeanstalkApplicationResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig(
  service_role: str = None,
  version_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.serviceRole">service_role</a></code> | <code>str</code> | The ARN of an IAM service role that Elastic Beanstalk has permission to assume. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.versionLifecycleConfig">version_lifecycle_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | Defines lifecycle settings for application versions. |

---

##### `service_role`<sup>Optional</sup> <a name="service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

The ARN of an IAM service role that Elastic Beanstalk has permission to assume.

The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#service_role ElasticbeanstalkApplication#service_role}

---

##### `version_lifecycle_config`<sup>Optional</sup> <a name="version_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.versionLifecycleConfig"></a>

```python
version_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

Defines lifecycle settings for application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#version_lifecycle_config ElasticbeanstalkApplication#version_lifecycle_config}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig(
  max_age_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule = None,
  max_count_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule">max_age_rule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | Specify a max age rule to restrict the length of time that application versions are retained for an application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule">max_count_rule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | Specify a max count rule to restrict the number of application versions that are retained for an application. |

---

##### `max_age_rule`<sup>Optional</sup> <a name="max_age_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule"></a>

```python
max_age_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

Specify a max age rule to restrict the length of time that application versions are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_age_rule ElasticbeanstalkApplication#max_age_rule}

---

##### `max_count_rule`<sup>Optional</sup> <a name="max_count_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule"></a>

```python
max_count_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

Specify a max count rule to restrict the number of application versions that are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_count_rule ElasticbeanstalkApplication#max_count_rule}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(
  delete_source_from_s3: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  max_age_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3">delete_source_from_s3</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specify true to apply the rule, or false to disable it. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays">max_age_in_days</a></code> | <code>typing.Union[int, float]</code> | Specify the number of days to retain an application versions. |

---

##### `delete_source_from_s3`<sup>Optional</sup> <a name="delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3"></a>

```python
delete_source_from_s3: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

##### `max_age_in_days`<sup>Optional</sup> <a name="max_age_in_days" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays"></a>

```python
max_age_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the number of days to retain an application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_age_in_days ElasticbeanstalkApplication#max_age_in_days}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(
  delete_source_from_s3: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  max_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3">delete_source_from_s3</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specify true to apply the rule, or false to disable it. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Specify the maximum number of application versions to retain. |

---

##### `delete_source_from_s3`<sup>Optional</sup> <a name="delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3"></a>

```python
delete_source_from_s3: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify the maximum number of application versions to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_count ElasticbeanstalkApplication#max_count}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig">put_version_lifecycle_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetServiceRole">reset_service_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetVersionLifecycleConfig">reset_version_lifecycle_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_version_lifecycle_config` <a name="put_version_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig"></a>

```python
def put_version_lifecycle_config(
  max_age_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule = None,
  max_count_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule = None
) -> None
```

###### `max_age_rule`<sup>Optional</sup> <a name="max_age_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig.parameter.maxAgeRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

Specify a max age rule to restrict the length of time that application versions are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_age_rule ElasticbeanstalkApplication#max_age_rule}

---

###### `max_count_rule`<sup>Optional</sup> <a name="max_count_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig.parameter.maxCountRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

Specify a max count rule to restrict the number of application versions that are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_count_rule ElasticbeanstalkApplication#max_count_rule}

---

##### `reset_service_role` <a name="reset_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetServiceRole"></a>

```python
def reset_service_role() -> None
```

##### `reset_version_lifecycle_config` <a name="reset_version_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetVersionLifecycleConfig"></a>

```python
def reset_version_lifecycle_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig">version_lifecycle_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfigInput">version_lifecycle_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version_lifecycle_config`<sup>Required</sup> <a name="version_lifecycle_config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig"></a>

```python
version_lifecycle_config: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a>

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `version_lifecycle_config_input`<sup>Optional</sup> <a name="version_lifecycle_config_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfigInput"></a>

```python
version_lifecycle_config_input: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetDeleteSourceFromS3">reset_delete_source_from_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetMaxAgeInDays">reset_max_age_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_source_from_s3` <a name="reset_delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetDeleteSourceFromS3"></a>

```python
def reset_delete_source_from_s3() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_max_age_in_days` <a name="reset_max_age_in_days" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetMaxAgeInDays"></a>

```python
def reset_max_age_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3Input">delete_source_from_s3_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDaysInput">max_age_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3">delete_source_from_s3</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays">max_age_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_source_from_s3_input`<sup>Optional</sup> <a name="delete_source_from_s3_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3Input"></a>

```python
delete_source_from_s3_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_age_in_days_input`<sup>Optional</sup> <a name="max_age_in_days_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDaysInput"></a>

```python
max_age_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_source_from_s3`<sup>Required</sup> <a name="delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3"></a>

```python
delete_source_from_s3: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_age_in_days`<sup>Required</sup> <a name="max_age_in_days" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays"></a>

```python
max_age_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetDeleteSourceFromS3">reset_delete_source_from_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetMaxCount">reset_max_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_source_from_s3` <a name="reset_delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetDeleteSourceFromS3"></a>

```python
def reset_delete_source_from_s3() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_max_count` <a name="reset_max_count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetMaxCount"></a>

```python
def reset_max_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3Input">delete_source_from_s3_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCountInput">max_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3">delete_source_from_s3</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_source_from_s3_input`<sup>Optional</sup> <a name="delete_source_from_s3_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3Input"></a>

```python
delete_source_from_s3_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_count_input`<sup>Optional</sup> <a name="max_count_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCountInput"></a>

```python
max_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_source_from_s3`<sup>Required</sup> <a name="delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3"></a>

```python
delete_source_from_s3: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application

elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule">put_max_age_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule">put_max_count_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxAgeRule">reset_max_age_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxCountRule">reset_max_count_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_max_age_rule` <a name="put_max_age_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule"></a>

```python
def put_max_age_rule(
  delete_source_from_s3: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  max_age_in_days: typing.Union[int, float] = None
) -> None
```

###### `delete_source_from_s3`<sup>Optional</sup> <a name="delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule.parameter.deleteSourceFromS3"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

###### `max_age_in_days`<sup>Optional</sup> <a name="max_age_in_days" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule.parameter.maxAgeInDays"></a>

- *Type:* typing.Union[int, float]

Specify the number of days to retain an application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_age_in_days ElasticbeanstalkApplication#max_age_in_days}

---

##### `put_max_count_rule` <a name="put_max_count_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule"></a>

```python
def put_max_count_rule(
  delete_source_from_s3: bool | IResolvable = None,
  enabled: bool | IResolvable = None,
  max_count: typing.Union[int, float] = None
) -> None
```

###### `delete_source_from_s3`<sup>Optional</sup> <a name="delete_source_from_s3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule.parameter.deleteSourceFromS3"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

###### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule.parameter.maxCount"></a>

- *Type:* typing.Union[int, float]

Specify the maximum number of application versions to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_application#max_count ElasticbeanstalkApplication#max_count}

---

##### `reset_max_age_rule` <a name="reset_max_age_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxAgeRule"></a>

```python
def reset_max_age_rule() -> None
```

##### `reset_max_count_rule` <a name="reset_max_count_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxCountRule"></a>

```python
def reset_max_count_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule">max_age_rule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule">max_count_rule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRuleInput">max_age_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRuleInput">max_count_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_age_rule`<sup>Required</sup> <a name="max_age_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule"></a>

```python
max_age_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a>

---

##### `max_count_rule`<sup>Required</sup> <a name="max_count_rule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule"></a>

```python
max_count_rule: ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a>

---

##### `max_age_rule_input`<sup>Optional</sup> <a name="max_age_rule_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRuleInput"></a>

```python
max_age_rule_input: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

---

##### `max_count_rule_input`<sup>Optional</sup> <a name="max_count_rule_input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRuleInput"></a>

```python
max_count_rule_input: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

---



