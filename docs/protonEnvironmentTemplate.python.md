# `protonEnvironmentTemplate` Submodule <a name="`protonEnvironmentTemplate` Submodule" id="@cdktn/provider-awscc.protonEnvironmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProtonEnvironmentTemplate <a name="ProtonEnvironmentTemplate" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template awscc_proton_environment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  display_name: str = None,
  encryption_key: str = None,
  name: str = None,
  provisioning: str = None,
  tags: IResolvable | typing.List[ProtonEnvironmentTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | <p>A description of the environment template.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | <p>The environment template name as displayed in the developer interface.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code>str</code> | <p>A customer provided encryption key that Proton uses to encrypt data.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#name ProtonEnvironmentTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.provisioning">provisioning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#provisioning ProtonEnvironmentTemplate#provisioning}. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]</code> | <p>An optional list of metadata items that you can associate with the Proton environment template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.description"></a>

- *Type:* str

<p>A description of the environment template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#description ProtonEnvironmentTemplate#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

<p>The environment template name as displayed in the developer interface.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#display_name ProtonEnvironmentTemplate#display_name}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.encryptionKey"></a>

- *Type:* str

<p>A customer provided encryption key that Proton uses to encrypt data.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#encryption_key ProtonEnvironmentTemplate#encryption_key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#name ProtonEnvironmentTemplate#name}.

---

##### `provisioning`<sup>Optional</sup> <a name="provisioning" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.provisioning"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#provisioning ProtonEnvironmentTemplate#provisioning}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]

<p>An optional list of metadata items that you can associate with the Proton environment template.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#tags ProtonEnvironmentTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetProvisioning">reset_provisioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ProtonEnvironmentTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_provisioning` <a name="reset_provisioning" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetProvisioning"></a>

```python
def reset_provisioning() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ProtonEnvironmentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ProtonEnvironmentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProtonEnvironmentTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProtonEnvironmentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ProtonEnvironmentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList">ProtonEnvironmentTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provisioningInput">provisioning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provisioning">provisioning</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.tags"></a>

```python
tags: ProtonEnvironmentTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList">ProtonEnvironmentTemplateTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provisioning_input`<sup>Optional</sup> <a name="provisioning_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provisioningInput"></a>

```python
provisioning_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ProtonEnvironmentTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provisioning`<sup>Required</sup> <a name="provisioning" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.provisioning"></a>

```python
provisioning: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProtonEnvironmentTemplateConfig <a name="ProtonEnvironmentTemplateConfig" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  display_name: str = None,
  encryption_key: str = None,
  name: str = None,
  provisioning: str = None,
  tags: IResolvable | typing.List[ProtonEnvironmentTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.description">description</a></code> | <code>str</code> | <p>A description of the environment template.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | <p>The environment template name as displayed in the developer interface.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.encryptionKey">encryption_key</a></code> | <code>str</code> | <p>A customer provided encryption key that Proton uses to encrypt data.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#name ProtonEnvironmentTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.provisioning">provisioning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#provisioning ProtonEnvironmentTemplate#provisioning}. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]</code> | <p>An optional list of metadata items that you can associate with the Proton environment template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

<p>A description of the environment template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#description ProtonEnvironmentTemplate#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

<p>The environment template name as displayed in the developer interface.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#display_name ProtonEnvironmentTemplate#display_name}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

<p>A customer provided encryption key that Proton uses to encrypt data.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#encryption_key ProtonEnvironmentTemplate#encryption_key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#name ProtonEnvironmentTemplate#name}.

---

##### `provisioning`<sup>Optional</sup> <a name="provisioning" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.provisioning"></a>

```python
provisioning: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#provisioning ProtonEnvironmentTemplate#provisioning}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ProtonEnvironmentTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]

<p>An optional list of metadata items that you can associate with the Proton environment template.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#tags ProtonEnvironmentTemplate#tags}

---

### ProtonEnvironmentTemplateTags <a name="ProtonEnvironmentTemplateTags" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags.property.key">key</a></code> | <code>str</code> | <p>The key of the resource tag.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags.property.value">value</a></code> | <code>str</code> | <p>The value of the resource tag.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>The key of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#key ProtonEnvironmentTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>The value of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_template#value ProtonEnvironmentTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProtonEnvironmentTemplateTagsList <a name="ProtonEnvironmentTemplateTagsList" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProtonEnvironmentTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ProtonEnvironmentTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>]

---


### ProtonEnvironmentTemplateTagsOutputReference <a name="ProtonEnvironmentTemplateTagsOutputReference" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_template

protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ProtonEnvironmentTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.protonEnvironmentTemplate.ProtonEnvironmentTemplateTags">ProtonEnvironmentTemplateTags</a>

---



