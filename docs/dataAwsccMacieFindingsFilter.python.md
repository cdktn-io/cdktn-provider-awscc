# `dataAwsccMacieFindingsFilter` Submodule <a name="`dataAwsccMacieFindingsFilter` Submodule" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMacieFindingsFilter <a name="DataAwsccMacieFindingsFilter" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/macie_findings_filter awscc_macie_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/macie_findings_filter#id DataAwsccMacieFindingsFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMacieFindingsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMacieFindingsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMacieFindingsFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMacieFindingsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/macie_findings_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMacieFindingsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference">DataAwsccMacieFindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.findingsFilterId">findings_filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList">DataAwsccMacieFindingsFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.findingCriteria"></a>

```python
finding_criteria: DataAwsccMacieFindingsFilterFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference">DataAwsccMacieFindingsFilterFindingCriteriaOutputReference</a>

---

##### `findings_filter_id`<sup>Required</sup> <a name="findings_filter_id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.findingsFilterId"></a>

```python
findings_filter_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.tags"></a>

```python
tags: DataAwsccMacieFindingsFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList">DataAwsccMacieFindingsFilterTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMacieFindingsFilterConfig <a name="DataAwsccMacieFindingsFilterConfig" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/macie_findings_filter#id DataAwsccMacieFindingsFilter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMacieFindingsFilterFindingCriteria <a name="DataAwsccMacieFindingsFilterFindingCriteria" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteria()
```


### DataAwsccMacieFindingsFilterFindingCriteriaCriterion <a name="DataAwsccMacieFindingsFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterion()
```


### DataAwsccMacieFindingsFilterTags <a name="DataAwsccMacieFindingsFilterTags" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap <a name="DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference <a name="DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq">eq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt">gt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte">gte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt">lt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte">lte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq">neq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterion">DataAwsccMacieFindingsFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gt`<sup>Required</sup> <a name="gt" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```python
gt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```python
gte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lt`<sup>Required</sup> <a name="lt" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```python
lt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```python
lte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMacieFindingsFilterFindingCriteriaCriterion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterion">DataAwsccMacieFindingsFilterFindingCriteriaCriterion</a>

---


### DataAwsccMacieFindingsFilterFindingCriteriaOutputReference <a name="DataAwsccMacieFindingsFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap">DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteria">DataAwsccMacieFindingsFilterFindingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```python
criterion: DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap">DataAwsccMacieFindingsFilterFindingCriteriaCriterionMap</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMacieFindingsFilterFindingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterFindingCriteria">DataAwsccMacieFindingsFilterFindingCriteria</a>

---


### DataAwsccMacieFindingsFilterTagsList <a name="DataAwsccMacieFindingsFilterTagsList" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMacieFindingsFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMacieFindingsFilterTagsOutputReference <a name="DataAwsccMacieFindingsFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_macie_findings_filter

dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTags">DataAwsccMacieFindingsFilterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMacieFindingsFilterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieFindingsFilter.DataAwsccMacieFindingsFilterTags">DataAwsccMacieFindingsFilterTags</a>

---



