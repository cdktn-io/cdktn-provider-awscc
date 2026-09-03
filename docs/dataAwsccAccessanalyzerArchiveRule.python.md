# `dataAwsccAccessanalyzerArchiveRule` Submodule <a name="`dataAwsccAccessanalyzerArchiveRule` Submodule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAccessanalyzerArchiveRule <a name="DataAwsccAccessanalyzerArchiveRule" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/accessanalyzer_archive_rule awscc_accessanalyzer_archive_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/accessanalyzer_archive_rule#id DataAwsccAccessanalyzerArchiveRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAccessanalyzerArchiveRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAccessanalyzerArchiveRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAccessanalyzerArchiveRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.analyzerName">analyzer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap">DataAwsccAccessanalyzerArchiveRuleFilterMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `analyzer_name`<sup>Required</sup> <a name="analyzer_name" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.analyzerName"></a>

```python
analyzer_name: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.filter"></a>

```python
filter: DataAwsccAccessanalyzerArchiveRuleFilterMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap">DataAwsccAccessanalyzerArchiveRuleFilterMap</a>

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAccessanalyzerArchiveRuleConfig <a name="DataAwsccAccessanalyzerArchiveRuleConfig" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/accessanalyzer_archive_rule#id DataAwsccAccessanalyzerArchiveRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAccessanalyzerArchiveRuleFilter <a name="DataAwsccAccessanalyzerArchiveRuleFilter" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAccessanalyzerArchiveRuleFilterMap <a name="DataAwsccAccessanalyzerArchiveRuleFilterMap" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccAccessanalyzerArchiveRuleFilterOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAccessanalyzerArchiveRuleFilterOutputReference <a name="DataAwsccAccessanalyzerArchiveRuleFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_accessanalyzer_archive_rule

dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.contains">contains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.eq">eq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.exists">exists</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.neq">neq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter">DataAwsccAccessanalyzerArchiveRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.contains"></a>

```python
contains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.exists"></a>

```python
exists: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAccessanalyzerArchiveRuleFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAccessanalyzerArchiveRule.DataAwsccAccessanalyzerArchiveRuleFilter">DataAwsccAccessanalyzerArchiveRuleFilter</a>

---



