# `dataAwsccConfigRemediationConfiguration` Submodule <a name="`dataAwsccConfigRemediationConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigRemediationConfiguration <a name="DataAwsccConfigRemediationConfiguration" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/config_remediation_configuration awscc_config_remediation_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/config_remediation_configuration#id DataAwsccConfigRemediationConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConfigRemediationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConfigRemediationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConfigRemediationConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConfigRemediationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/config_remediation_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigRemediationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.automatic">automatic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.configRuleName">config_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.executionControls">execution_controls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference">DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.maximumAutomaticAttempts">maximum_automatic_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.retryAttemptSeconds">retry_attempt_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.automatic"></a>

```python
automatic: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `config_rule_name`<sup>Required</sup> <a name="config_rule_name" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.configRuleName"></a>

```python
config_rule_name: str
```

- *Type:* str

---

##### `execution_controls`<sup>Required</sup> <a name="execution_controls" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.executionControls"></a>

```python
execution_controls: DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference">DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference</a>

---

##### `maximum_automatic_attempts`<sup>Required</sup> <a name="maximum_automatic_attempts" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.maximumAutomaticAttempts"></a>

```python
maximum_automatic_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `retry_attempt_seconds`<sup>Required</sup> <a name="retry_attempt_seconds" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.retryAttemptSeconds"></a>

```python
retry_attempt_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigRemediationConfigurationConfig <a name="DataAwsccConfigRemediationConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/config_remediation_configuration#id DataAwsccConfigRemediationConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigRemediationConfigurationExecutionControls <a name="DataAwsccConfigRemediationConfigurationExecutionControls" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControls.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControls()
```


### DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls <a name="DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference <a name="DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls">ssm_controls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControls">DataAwsccConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssm_controls`<sup>Required</sup> <a name="ssm_controls" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls"></a>

```python
ssm_controls: DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigRemediationConfigurationExecutionControls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControls">DataAwsccConfigRemediationConfigurationExecutionControls</a>

---


### DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference <a name="DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_remediation_configuration

dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage">concurrent_execution_rate_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage">error_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls">DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrent_execution_rate_percentage`<sup>Required</sup> <a name="concurrent_execution_rate_percentage" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage"></a>

```python
concurrent_execution_rate_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_percentage`<sup>Required</sup> <a name="error_percentage" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage"></a>

```python
error_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigRemediationConfiguration.DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls">DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls</a>

---



