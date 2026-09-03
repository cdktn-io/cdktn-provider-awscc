# `dataAwsccLexBotAlias` Submodule <a name="`dataAwsccLexBotAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccLexBotAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLexBotAlias <a name="DataAwsccLexBotAlias" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/lex_bot_alias awscc_lex_bot_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAlias(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/lex_bot_alias#id DataAwsccLexBotAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLexBotAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAlias.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLexBotAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLexBotAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLexBotAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/lex_bot_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLexBotAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasId">bot_alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasLocaleSettings">bot_alias_locale_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList">DataAwsccLexBotAliasBotAliasLocaleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasName">bot_alias_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasStatus">bot_alias_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasTags">bot_alias_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList">DataAwsccLexBotAliasBotAliasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botId">bot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botVersion">bot_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.conversationLogSettings">conversation_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference">DataAwsccLexBotAliasConversationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.sentimentAnalysisSettings">sentiment_analysis_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference">DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bot_alias_id`<sup>Required</sup> <a name="bot_alias_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasId"></a>

```python
bot_alias_id: str
```

- *Type:* str

---

##### `bot_alias_locale_settings`<sup>Required</sup> <a name="bot_alias_locale_settings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasLocaleSettings"></a>

```python
bot_alias_locale_settings: DataAwsccLexBotAliasBotAliasLocaleSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList">DataAwsccLexBotAliasBotAliasLocaleSettingsList</a>

---

##### `bot_alias_name`<sup>Required</sup> <a name="bot_alias_name" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasName"></a>

```python
bot_alias_name: str
```

- *Type:* str

---

##### `bot_alias_status`<sup>Required</sup> <a name="bot_alias_status" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasStatus"></a>

```python
bot_alias_status: str
```

- *Type:* str

---

##### `bot_alias_tags`<sup>Required</sup> <a name="bot_alias_tags" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botAliasTags"></a>

```python
bot_alias_tags: DataAwsccLexBotAliasBotAliasTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList">DataAwsccLexBotAliasBotAliasTagsList</a>

---

##### `bot_id`<sup>Required</sup> <a name="bot_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botId"></a>

```python
bot_id: str
```

- *Type:* str

---

##### `bot_version`<sup>Required</sup> <a name="bot_version" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.botVersion"></a>

```python
bot_version: str
```

- *Type:* str

---

##### `conversation_log_settings`<sup>Required</sup> <a name="conversation_log_settings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.conversationLogSettings"></a>

```python
conversation_log_settings: DataAwsccLexBotAliasConversationLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference">DataAwsccLexBotAliasConversationLogSettingsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `sentiment_analysis_settings`<sup>Required</sup> <a name="sentiment_analysis_settings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.sentimentAnalysisSettings"></a>

```python
sentiment_analysis_settings: DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference">DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLexBotAliasBotAliasLocaleSettings <a name="DataAwsccLexBotAliasBotAliasLocaleSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings()
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting()
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification()
```


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook()
```


### DataAwsccLexBotAliasBotAliasTags <a name="DataAwsccLexBotAliasBotAliasTags" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags()
```


### DataAwsccLexBotAliasConfig <a name="DataAwsccLexBotAliasConfig" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/lex_bot_alias#id DataAwsccLexBotAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLexBotAliasConversationLogSettings <a name="DataAwsccLexBotAliasConversationLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings()
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings()
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination()
```


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket()
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettings <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings()
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination()
```


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch()
```


### DataAwsccLexBotAliasSentimentAnalysisSettings <a name="DataAwsccLexBotAliasSentimentAnalysisSettings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion">code_hook_interface_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_hook_interface_version`<sup>Required</sup> <a name="code_hook_interface_version" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.codeHookInterfaceVersion"></a>

```python
code_hook_interface_version: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook">lambda_code_hook</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_code_hook`<sup>Required</sup> <a name="lambda_code_hook" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.lambdaCodeHook"></a>

```python
lambda_code_hook: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification">code_hook_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_hook_specification`<sup>Required</sup> <a name="code_hook_specification" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.codeHookSpecification"></a>

```python
code_hook_specification: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting</a>

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsList <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference <a name="DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting">bot_alias_locale_setting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId">locale_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings">DataAwsccLexBotAliasBotAliasLocaleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_alias_locale_setting`<sup>Required</sup> <a name="bot_alias_locale_setting" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.botAliasLocaleSetting"></a>

```python
bot_alias_locale_setting: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference">DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference</a>

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasBotAliasLocaleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasLocaleSettings">DataAwsccLexBotAliasBotAliasLocaleSettings</a>

---


### DataAwsccLexBotAliasBotAliasTagsList <a name="DataAwsccLexBotAliasBotAliasTagsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLexBotAliasBotAliasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLexBotAliasBotAliasTagsOutputReference <a name="DataAwsccLexBotAliasBotAliasTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags">DataAwsccLexBotAliasBotAliasTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasBotAliasTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasBotAliasTags">DataAwsccLexBotAliasBotAliasTags</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix">log_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `log_prefix`<sup>Required</sup> <a name="log_prefix" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.logPrefix"></a>

```python
log_prefix: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket</a>

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.destination"></a>

```python
destination: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings</a>

---


### DataAwsccLexBotAliasConversationLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings">audio_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.textLogSettings">text_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings">DataAwsccLexBotAliasConversationLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_log_settings`<sup>Required</sup> <a name="audio_log_settings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.audioLogSettings"></a>

```python
audio_log_settings: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList</a>

---

##### `text_log_settings`<sup>Required</sup> <a name="text_log_settings" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.textLogSettings"></a>

```python
text_log_settings: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasConversationLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettings">DataAwsccLexBotAliasConversationLogSettings</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix">log_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `log_prefix`<sup>Required</sup> <a name="log_prefix" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.logPrefix"></a>

```python
log_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.cloudwatch"></a>

```python
cloudwatch: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination</a>

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference <a name="DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings">DataAwsccLexBotAliasConversationLogSettingsTextLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.destination"></a>

```python
destination: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference">DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasConversationLogSettingsTextLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasConversationLogSettingsTextLogSettings">DataAwsccLexBotAliasConversationLogSettingsTextLogSettings</a>

---


### DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference <a name="DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lex_bot_alias

dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment">detect_sentiment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings">DataAwsccLexBotAliasSentimentAnalysisSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detect_sentiment`<sup>Required</sup> <a name="detect_sentiment" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.detectSentiment"></a>

```python
detect_sentiment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLexBotAliasSentimentAnalysisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLexBotAlias.DataAwsccLexBotAliasSentimentAnalysisSettings">DataAwsccLexBotAliasSentimentAnalysisSettings</a>

---



