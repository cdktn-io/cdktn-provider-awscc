# `dataAwsccCasesCaseRule` Submodule <a name="`dataAwsccCasesCaseRule` Submodule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCasesCaseRule <a name="DataAwsccCasesCaseRule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_case_rule awscc_cases_case_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_case_rule#id DataAwsccCasesCaseRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCasesCaseRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCasesCaseRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCasesCaseRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCasesCaseRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_case_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCasesCaseRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleArn">case_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleId">case_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference">DataAwsccCasesCaseRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList">DataAwsccCasesCaseRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `case_rule_arn`<sup>Required</sup> <a name="case_rule_arn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleArn"></a>

```python
case_rule_arn: str
```

- *Type:* str

---

##### `case_rule_id`<sup>Required</sup> <a name="case_rule_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.caseRuleId"></a>

```python
case_rule_id: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.rule"></a>

```python
rule: DataAwsccCasesCaseRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference">DataAwsccCasesCaseRuleRuleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tags"></a>

```python
tags: DataAwsccCasesCaseRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList">DataAwsccCasesCaseRuleTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCasesCaseRuleConfig <a name="DataAwsccCasesCaseRuleConfig" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_case_rule#id DataAwsccCasesCaseRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCasesCaseRuleRule <a name="DataAwsccCasesCaseRuleRule" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule()
```


### DataAwsccCasesCaseRuleRuleHidden <a name="DataAwsccCasesCaseRuleRuleHidden" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden()
```


### DataAwsccCasesCaseRuleRuleHiddenConditions <a name="DataAwsccCasesCaseRuleRuleHiddenConditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions()
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo()
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne()
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo()
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo()
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne()
```


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo()
```


### DataAwsccCasesCaseRuleRuleRequired <a name="DataAwsccCasesCaseRuleRuleRequired" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired()
```


### DataAwsccCasesCaseRuleRuleRequiredConditions <a name="DataAwsccCasesCaseRuleRuleRequiredConditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions()
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo()
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne()
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo()
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo()
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne()
```


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo()
```


### DataAwsccCasesCaseRuleTags <a name="DataAwsccCasesCaseRuleTags" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result">result</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandOne"></a>

```python
operand_one: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOperandTwoOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.result"></a>

```python
result: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsList <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsList" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result">result</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandOne"></a>

```python
operand_one: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.result"></a>

```python
result: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo">equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo">not_equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions">DataAwsccCasesCaseRuleRuleHiddenConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.equalTo"></a>

```python
equal_to: DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsEqualToOutputReference</a>

---

##### `not_equal_to`<sup>Required</sup> <a name="not_equal_to" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.notEqualTo"></a>

```python
not_equal_to: DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleHiddenConditionsNotEqualToOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHiddenConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditions">DataAwsccCasesCaseRuleRuleHiddenConditions</a>

---


### DataAwsccCasesCaseRuleRuleHiddenOutputReference <a name="DataAwsccCasesCaseRuleRuleHiddenOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList">DataAwsccCasesCaseRuleRuleHiddenConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.defaultValue">default_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden">DataAwsccCasesCaseRuleRuleHidden</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.conditions"></a>

```python
conditions: DataAwsccCasesCaseRuleRuleHiddenConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenConditionsList">DataAwsccCasesCaseRuleRuleHiddenConditionsList</a>

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.defaultValue"></a>

```python
default_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleHidden
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHidden">DataAwsccCasesCaseRuleRuleHidden</a>

---


### DataAwsccCasesCaseRuleRuleOutputReference <a name="DataAwsccCasesCaseRuleRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.hidden">hidden</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference">DataAwsccCasesCaseRuleRuleHiddenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.required">required</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference">DataAwsccCasesCaseRuleRuleRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule">DataAwsccCasesCaseRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.hidden"></a>

```python
hidden: DataAwsccCasesCaseRuleRuleHiddenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleHiddenOutputReference">DataAwsccCasesCaseRuleRuleHiddenOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.required"></a>

```python
required: DataAwsccCasesCaseRuleRuleRequiredOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference">DataAwsccCasesCaseRuleRuleRequiredOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRule">DataAwsccCasesCaseRuleRule</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result">result</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandOne"></a>

```python
operand_one: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOperandTwoOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.result"></a>

```python
result: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsList <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsList" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOne</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue">boolean_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue">empty_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `empty_value`<sup>Required</sup> <a name="empty_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.emptyValue"></a>

```python
empty_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne">operand_one</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo">operand_two</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result">result</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand_one`<sup>Required</sup> <a name="operand_one" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandOne"></a>

```python
operand_one: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandOneOutputReference</a>

---

##### `operand_two`<sup>Required</sup> <a name="operand_two" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.operandTwo"></a>

```python
operand_two: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOperandTwoOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.result"></a>

```python
result: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualTo</a>

---


### DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo">equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo">not_equal_to</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions">DataAwsccCasesCaseRuleRuleRequiredConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.equalTo"></a>

```python
equal_to: DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsEqualToOutputReference</a>

---

##### `not_equal_to`<sup>Required</sup> <a name="not_equal_to" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.notEqualTo"></a>

```python
not_equal_to: DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference">DataAwsccCasesCaseRuleRuleRequiredConditionsNotEqualToOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequiredConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditions">DataAwsccCasesCaseRuleRuleRequiredConditions</a>

---


### DataAwsccCasesCaseRuleRuleRequiredOutputReference <a name="DataAwsccCasesCaseRuleRuleRequiredOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList">DataAwsccCasesCaseRuleRuleRequiredConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.defaultValue">default_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired">DataAwsccCasesCaseRuleRuleRequired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.conditions"></a>

```python
conditions: DataAwsccCasesCaseRuleRuleRequiredConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredConditionsList">DataAwsccCasesCaseRuleRuleRequiredConditionsList</a>

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.defaultValue"></a>

```python
default_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequiredOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleRuleRequired
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleRuleRequired">DataAwsccCasesCaseRuleRuleRequired</a>

---


### DataAwsccCasesCaseRuleTagsList <a name="DataAwsccCasesCaseRuleTagsList" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesCaseRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesCaseRuleTagsOutputReference <a name="DataAwsccCasesCaseRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_case_rule

dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags">DataAwsccCasesCaseRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesCaseRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesCaseRule.DataAwsccCasesCaseRuleTags">DataAwsccCasesCaseRuleTags</a>

---



