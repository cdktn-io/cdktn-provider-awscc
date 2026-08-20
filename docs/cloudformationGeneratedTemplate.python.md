# `cloudformationGeneratedTemplate` Submodule <a name="`cloudformationGeneratedTemplate` Submodule" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGeneratedTemplate <a name="CloudformationGeneratedTemplate" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template awscc_cloudformation_generated_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  generated_template_name: str,
  template_configuration: CloudformationGeneratedTemplateTemplateConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.generatedTemplateName">generated_template_name</a></code> | <code>str</code> | The name assigned to the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | The configuration details of the generated template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `generated_template_name`<sup>Required</sup> <a name="generated_template_name" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.generatedTemplateName"></a>

- *Type:* str

The name assigned to the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#generated_template_name CloudformationGeneratedTemplate#generated_template_name}

---

##### `template_configuration`<sup>Optional</sup> <a name="template_configuration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.templateConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

The configuration details of the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#template_configuration CloudformationGeneratedTemplate#template_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration">put_template_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration">reset_template_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_template_configuration` <a name="put_template_configuration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration"></a>

```python
def put_template_configuration(
  deletion_policy: str = None,
  update_replace_policy: str = None
) -> None
```

###### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration.parameter.deletionPolicy"></a>

- *Type:* str

The DeletionPolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#deletion_policy CloudformationGeneratedTemplate#deletion_policy}

---

###### `update_replace_policy`<sup>Optional</sup> <a name="update_replace_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration.parameter.updateReplacePolicy"></a>

- *Type:* str

The UpdateReplacePolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#update_replace_policy CloudformationGeneratedTemplate#update_replace_policy}

---

##### `reset_template_configuration` <a name="reset_template_configuration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration"></a>

```python
def reset_template_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationGeneratedTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationGeneratedTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGeneratedTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId">generated_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress">progress</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings">total_warnings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput">generated_template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput">template_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName">generated_template_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `generated_template_id`<sup>Required</sup> <a name="generated_template_id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId"></a>

```python
generated_template_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress"></a>

```python
progress: CloudformationGeneratedTemplateProgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration"></a>

```python
template_configuration: CloudformationGeneratedTemplateTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a>

---

##### `total_warnings`<sup>Required</sup> <a name="total_warnings" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings"></a>

```python
total_warnings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `generated_template_name_input`<sup>Optional</sup> <a name="generated_template_name_input" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput"></a>

```python
generated_template_name_input: str
```

- *Type:* str

---

##### `template_configuration_input`<sup>Optional</sup> <a name="template_configuration_input" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput"></a>

```python
template_configuration_input: IResolvable | CloudformationGeneratedTemplateTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---

##### `generated_template_name`<sup>Required</sup> <a name="generated_template_name" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName"></a>

```python
generated_template_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGeneratedTemplateConfig <a name="CloudformationGeneratedTemplateConfig" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  generated_template_name: str,
  template_configuration: CloudformationGeneratedTemplateTemplateConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName">generated_template_name</a></code> | <code>str</code> | The name assigned to the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | The configuration details of the generated template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `generated_template_name`<sup>Required</sup> <a name="generated_template_name" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName"></a>

```python
generated_template_name: str
```

- *Type:* str

The name assigned to the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#generated_template_name CloudformationGeneratedTemplate#generated_template_name}

---

##### `template_configuration`<sup>Optional</sup> <a name="template_configuration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration"></a>

```python
template_configuration: CloudformationGeneratedTemplateTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

The configuration details of the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#template_configuration CloudformationGeneratedTemplate#template_configuration}

---

### CloudformationGeneratedTemplateProgress <a name="CloudformationGeneratedTemplateProgress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress()
```


### CloudformationGeneratedTemplateTemplateConfiguration <a name="CloudformationGeneratedTemplateTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration(
  deletion_policy: str = None,
  update_replace_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The DeletionPolicy assigned to resources in the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy">update_replace_policy</a></code> | <code>str</code> | The UpdateReplacePolicy assigned to resources in the generated template. |

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

The DeletionPolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#deletion_policy CloudformationGeneratedTemplate#deletion_policy}

---

##### `update_replace_policy`<sup>Optional</sup> <a name="update_replace_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy"></a>

```python
update_replace_policy: str
```

- *Type:* str

The UpdateReplacePolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#update_replace_policy CloudformationGeneratedTemplate#update_replace_policy}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGeneratedTemplateProgressOutputReference <a name="CloudformationGeneratedTemplateProgressOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed">resources_failed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending">resources_pending</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing">resources_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded">resources_succeeded</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources_failed`<sup>Required</sup> <a name="resources_failed" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed"></a>

```python
resources_failed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources_pending`<sup>Required</sup> <a name="resources_pending" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending"></a>

```python
resources_pending: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources_processing`<sup>Required</sup> <a name="resources_processing" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing"></a>

```python
resources_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources_succeeded`<sup>Required</sup> <a name="resources_succeeded" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded"></a>

```python
resources_succeeded: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue"></a>

```python
internal_value: CloudformationGeneratedTemplateProgress
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a>

---


### CloudformationGeneratedTemplateTemplateConfigurationOutputReference <a name="CloudformationGeneratedTemplateTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_generated_template

cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy">reset_update_replace_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_update_replace_policy` <a name="reset_update_replace_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy"></a>

```python
def reset_update_replace_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput">update_replace_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy">update_replace_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `update_replace_policy_input`<sup>Optional</sup> <a name="update_replace_policy_input" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput"></a>

```python
update_replace_policy_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `update_replace_policy`<sup>Required</sup> <a name="update_replace_policy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy"></a>

```python
update_replace_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationGeneratedTemplateTemplateConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---



