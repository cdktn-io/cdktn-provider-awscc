# `dataAwsccBcmScheduledReport` Submodule <a name="`dataAwsccBcmScheduledReport` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmScheduledReport <a name="DataAwsccBcmScheduledReport" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcm_scheduled_report awscc_bcm_scheduled_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcm_scheduled_report#id DataAwsccBcmScheduledReport#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBcmScheduledReport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBcmScheduledReport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBcmScheduledReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBcmScheduledReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmScheduledReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dashboardArn">dashboard_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.healthStatus">health_status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference">DataAwsccBcmScheduledReportHealthStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference">DataAwsccBcmScheduledReportScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduledReportExecutionRoleArn">scheduled_report_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList">DataAwsccBcmScheduledReportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetDateRangeOverride">widget_date_range_override</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetIds">widget_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dashboard_arn`<sup>Required</sup> <a name="dashboard_arn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dashboardArn"></a>

```python
dashboard_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_status`<sup>Required</sup> <a name="health_status" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.healthStatus"></a>

```python
health_status: DataAwsccBcmScheduledReportHealthStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference">DataAwsccBcmScheduledReportHealthStatusOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduleConfig"></a>

```python
schedule_config: DataAwsccBcmScheduledReportScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference">DataAwsccBcmScheduledReportScheduleConfigOutputReference</a>

---

##### `scheduled_report_execution_role_arn`<sup>Required</sup> <a name="scheduled_report_execution_role_arn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduledReportExecutionRoleArn"></a>

```python
scheduled_report_execution_role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tags"></a>

```python
tags: DataAwsccBcmScheduledReportTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList">DataAwsccBcmScheduledReportTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `widget_date_range_override`<sup>Required</sup> <a name="widget_date_range_override" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetDateRangeOverride"></a>

```python
widget_date_range_override: DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference</a>

---

##### `widget_ids`<sup>Required</sup> <a name="widget_ids" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetIds"></a>

```python
widget_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmScheduledReportConfig <a name="DataAwsccBcmScheduledReportConfig" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcm_scheduled_report#id DataAwsccBcmScheduledReport#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBcmScheduledReportHealthStatus <a name="DataAwsccBcmScheduledReportHealthStatus" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus()
```


### DataAwsccBcmScheduledReportScheduleConfig <a name="DataAwsccBcmScheduledReportScheduleConfig" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig()
```


### DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod <a name="DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod()
```


### DataAwsccBcmScheduledReportTags <a name="DataAwsccBcmScheduledReportTags" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags()
```


### DataAwsccBcmScheduledReportWidgetDateRangeOverride <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverride" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride()
```


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime()
```


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBcmScheduledReportHealthStatusOutputReference <a name="DataAwsccBcmScheduledReportHealthStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt">last_refreshed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus">DataAwsccBcmScheduledReportHealthStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_refreshed_at`<sup>Required</sup> <a name="last_refreshed_at" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt"></a>

```python
last_refreshed_at: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmScheduledReportHealthStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus">DataAwsccBcmScheduledReportHealthStatus</a>

---


### DataAwsccBcmScheduledReportScheduleConfigOutputReference <a name="DataAwsccBcmScheduledReportScheduleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone">schedule_expression_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod">schedule_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig">DataAwsccBcmScheduledReportScheduleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_expression_time_zone`<sup>Required</sup> <a name="schedule_expression_time_zone" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone"></a>

```python
schedule_expression_time_zone: str
```

- *Type:* str

---

##### `schedule_period`<sup>Required</sup> <a name="schedule_period" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod"></a>

```python
schedule_period: DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmScheduledReportScheduleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig">DataAwsccBcmScheduledReportScheduleConfig</a>

---


### DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference <a name="DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod</a>

---


### DataAwsccBcmScheduledReportTagsList <a name="DataAwsccBcmScheduledReportTagsList" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBcmScheduledReportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBcmScheduledReportTagsOutputReference <a name="DataAwsccBcmScheduledReportTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags">DataAwsccBcmScheduledReportTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmScheduledReportTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags">DataAwsccBcmScheduledReportTags</a>

---


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime">end_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride">DataAwsccBcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime"></a>

```python
end_time: DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime"></a>

```python
start_time: DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmScheduledReportWidgetDateRangeOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride">DataAwsccBcmScheduledReportWidgetDateRangeOverride</a>

---


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcm_scheduled_report

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---



