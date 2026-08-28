# `dataAwsccPcaconnectoradTemplate` Submodule <a name="`dataAwsccPcaconnectoradTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectoradTemplate <a name="DataAwsccPcaconnectoradTemplate" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorad_template awscc_pcaconnectorad_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorad_template#id DataAwsccPcaconnectoradTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccPcaconnectoradTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccPcaconnectoradTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorad_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectoradTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference">DataAwsccPcaconnectoradTemplateDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.reenrollAllCertificateHolders">reenroll_all_certificate_holders</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.definition"></a>

```python
definition: DataAwsccPcaconnectoradTemplateDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference">DataAwsccPcaconnectoradTemplateDefinitionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reenroll_all_certificate_holders`<sup>Required</sup> <a name="reenroll_all_certificate_holders" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.reenrollAllCertificateHolders"></a>

```python
reenroll_all_certificate_holders: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectoradTemplateConfig <a name="DataAwsccPcaconnectoradTemplateConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorad_template#id DataAwsccPcaconnectoradTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcaconnectoradTemplateDefinition <a name="DataAwsccPcaconnectoradTemplateDefinition" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2 <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3 <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4 <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags()
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectoradTemplateDefinitionOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV2">template_v2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV3">template_v3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV4">template_v4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition">DataAwsccPcaconnectoradTemplateDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_v2`<sup>Required</sup> <a name="template_v2" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV2"></a>

```python
template_v2: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference</a>

---

##### `template_v3`<sup>Required</sup> <a name="template_v3" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV3"></a>

```python
template_v3: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference</a>

---

##### `template_v4`<sup>Required</sup> <a name="template_v4" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV4"></a>

```python
template_v4: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition">DataAwsccPcaconnectoradTemplateDefinition</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.renewalPeriod">renewal_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.validityPeriod">validity_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.renewalPeriod"></a>

```python
renewal_period: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference</a>

---

##### `validity_period`<sup>Required</sup> <a name="validity_period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.validityPeriod"></a>

```python
validity_period: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull">enable_key_reuse_on_nt_token_keyset_storage_full</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms">include_symmetric_algorithms</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.noSecurityExtension">no_security_extension</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore">remove_invalid_certificate_from_personal_store</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.userInteractionRequired">user_interaction_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_key_reuse_on_nt_token_keyset_storage_full`<sup>Required</sup> <a name="enable_key_reuse_on_nt_token_keyset_storage_full" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull"></a>

```python
enable_key_reuse_on_nt_token_keyset_storage_full: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_symmetric_algorithms`<sup>Required</sup> <a name="include_symmetric_algorithms" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms"></a>

```python
include_symmetric_algorithms: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `no_security_extension`<sup>Required</sup> <a name="no_security_extension" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.noSecurityExtension"></a>

```python
no_security_extension: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `remove_invalid_certificate_from_personal_store`<sup>Required</sup> <a name="remove_invalid_certificate_from_personal_store" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore"></a>

```python
remove_invalid_certificate_from_personal_store: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `user_interaction_required`<sup>Required</sup> <a name="user_interaction_required" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.userInteractionRequired"></a>

```python
user_interaction_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.critical"></a>

```python
critical: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.policies"></a>

```python
policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier">policy_object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_object_identifier`<sup>Required</sup> <a name="policy_object_identifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier"></a>

```python
policy_object_identifier: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.usageFlags">usage_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.critical"></a>

```python
critical: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `usage_flags`<sup>Required</sup> <a name="usage_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.usageFlags"></a>

```python
usage_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment">data_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature">digital_signature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement">key_agreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment">key_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation">non_repudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_encipherment`<sup>Required</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment"></a>

```python
data_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `digital_signature`<sup>Required</sup> <a name="digital_signature" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature"></a>

```python
digital_signature: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement"></a>

```python
key_agreement: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_encipherment`<sup>Required</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment"></a>

```python
key_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `non_repudiation`<sup>Required</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation"></a>

```python
non_repudiation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.applicationPolicies">application_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_policies`<sup>Required</sup> <a name="application_policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.applicationPolicies"></a>

```python
application_policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference</a>

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.keyUsage"></a>

```python
key_usage: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.autoEnrollment">auto_enrollment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.machineType">machine_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_enrollment`<sup>Required</sup> <a name="auto_enrollment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.autoEnrollment"></a>

```python
auto_enrollment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.machineType"></a>

```python
machine_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.certificateValidity">certificate_validity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.enrollmentFlags">enrollment_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.generalFlags">general_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyAttributes">private_key_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyFlags">private_key_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.subjectNameFlags">subject_name_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.supersededTemplates">superseded_templates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_validity`<sup>Required</sup> <a name="certificate_validity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.certificateValidity"></a>

```python
certificate_validity: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference</a>

---

##### `enrollment_flags`<sup>Required</sup> <a name="enrollment_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.enrollmentFlags"></a>

```python
enrollment_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.extensions"></a>

```python
extensions: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference</a>

---

##### `general_flags`<sup>Required</sup> <a name="general_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.generalFlags"></a>

```python
general_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference</a>

---

##### `private_key_attributes`<sup>Required</sup> <a name="private_key_attributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyAttributes"></a>

```python
private_key_attributes: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference</a>

---

##### `private_key_flags`<sup>Required</sup> <a name="private_key_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyFlags"></a>

```python
private_key_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference</a>

---

##### `subject_name_flags`<sup>Required</sup> <a name="subject_name_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.subjectNameFlags"></a>

```python
subject_name_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference</a>

---

##### `superseded_templates`<sup>Required</sup> <a name="superseded_templates" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.supersededTemplates"></a>

```python
superseded_templates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.cryptoProviders">crypto_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.keySpec">key_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.minimalKeyLength">minimal_key_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crypto_providers`<sup>Required</sup> <a name="crypto_providers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.cryptoProviders"></a>

```python
crypto_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_spec`<sup>Required</sup> <a name="key_spec" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.keySpec"></a>

```python
key_spec: str
```

- *Type:* str

---

##### `minimal_key_length`<sup>Required</sup> <a name="minimal_key_length" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.minimalKeyLength"></a>

```python
minimal_key_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.exportableKey">exportable_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired">strong_key_protection_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `exportable_key`<sup>Required</sup> <a name="exportable_key" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.exportableKey"></a>

```python
exportable_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strong_key_protection_required`<sup>Required</sup> <a name="strong_key_protection_required" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired"></a>

```python
strong_key_protection_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireCommonName">require_common_name</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDirectoryPath">require_directory_path</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDnsAsCn">require_dns_as_cn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireEmail">require_email</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid">san_require_directory_guid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDns">san_require_dns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDomainDns">san_require_domain_dns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireEmail">san_require_email</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireSpn">san_require_spn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireUpn">san_require_upn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `require_common_name`<sup>Required</sup> <a name="require_common_name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireCommonName"></a>

```python
require_common_name: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_directory_path`<sup>Required</sup> <a name="require_directory_path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDirectoryPath"></a>

```python
require_directory_path: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_dns_as_cn`<sup>Required</sup> <a name="require_dns_as_cn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDnsAsCn"></a>

```python
require_dns_as_cn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_email`<sup>Required</sup> <a name="require_email" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireEmail"></a>

```python
require_email: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_directory_guid`<sup>Required</sup> <a name="san_require_directory_guid" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid"></a>

```python
san_require_directory_guid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_dns`<sup>Required</sup> <a name="san_require_dns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDns"></a>

```python
san_require_dns: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_domain_dns`<sup>Required</sup> <a name="san_require_domain_dns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDomainDns"></a>

```python
san_require_domain_dns: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_email`<sup>Required</sup> <a name="san_require_email" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireEmail"></a>

```python
san_require_email: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_spn`<sup>Required</sup> <a name="san_require_spn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireSpn"></a>

```python
san_require_spn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_upn`<sup>Required</sup> <a name="san_require_upn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireUpn"></a>

```python
san_require_upn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.renewalPeriod">renewal_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.validityPeriod">validity_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.renewalPeriod"></a>

```python
renewal_period: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference</a>

---

##### `validity_period`<sup>Required</sup> <a name="validity_period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.validityPeriod"></a>

```python
validity_period: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull">enable_key_reuse_on_nt_token_keyset_storage_full</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms">include_symmetric_algorithms</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.noSecurityExtension">no_security_extension</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore">remove_invalid_certificate_from_personal_store</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.userInteractionRequired">user_interaction_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_key_reuse_on_nt_token_keyset_storage_full`<sup>Required</sup> <a name="enable_key_reuse_on_nt_token_keyset_storage_full" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull"></a>

```python
enable_key_reuse_on_nt_token_keyset_storage_full: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_symmetric_algorithms`<sup>Required</sup> <a name="include_symmetric_algorithms" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms"></a>

```python
include_symmetric_algorithms: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `no_security_extension`<sup>Required</sup> <a name="no_security_extension" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.noSecurityExtension"></a>

```python
no_security_extension: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `remove_invalid_certificate_from_personal_store`<sup>Required</sup> <a name="remove_invalid_certificate_from_personal_store" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore"></a>

```python
remove_invalid_certificate_from_personal_store: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `user_interaction_required`<sup>Required</sup> <a name="user_interaction_required" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.userInteractionRequired"></a>

```python
user_interaction_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.critical"></a>

```python
critical: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.policies"></a>

```python
policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier">policy_object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_object_identifier`<sup>Required</sup> <a name="policy_object_identifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier"></a>

```python
policy_object_identifier: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.usageFlags">usage_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.critical"></a>

```python
critical: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `usage_flags`<sup>Required</sup> <a name="usage_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.usageFlags"></a>

```python
usage_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment">data_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature">digital_signature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement">key_agreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment">key_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation">non_repudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_encipherment`<sup>Required</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment"></a>

```python
data_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `digital_signature`<sup>Required</sup> <a name="digital_signature" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature"></a>

```python
digital_signature: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement"></a>

```python
key_agreement: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_encipherment`<sup>Required</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment"></a>

```python
key_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `non_repudiation`<sup>Required</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation"></a>

```python
non_repudiation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.applicationPolicies">application_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_policies`<sup>Required</sup> <a name="application_policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.applicationPolicies"></a>

```python
application_policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference</a>

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.keyUsage"></a>

```python
key_usage: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.autoEnrollment">auto_enrollment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.machineType">machine_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_enrollment`<sup>Required</sup> <a name="auto_enrollment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.autoEnrollment"></a>

```python
auto_enrollment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.machineType"></a>

```python
machine_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.certificateValidity">certificate_validity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.enrollmentFlags">enrollment_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.generalFlags">general_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyAttributes">private_key_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyFlags">private_key_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.subjectNameFlags">subject_name_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.supersededTemplates">superseded_templates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_validity`<sup>Required</sup> <a name="certificate_validity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.certificateValidity"></a>

```python
certificate_validity: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference</a>

---

##### `enrollment_flags`<sup>Required</sup> <a name="enrollment_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.enrollmentFlags"></a>

```python
enrollment_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.extensions"></a>

```python
extensions: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference</a>

---

##### `general_flags`<sup>Required</sup> <a name="general_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.generalFlags"></a>

```python
general_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference</a>

---

##### `hash_algorithm`<sup>Required</sup> <a name="hash_algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

---

##### `private_key_attributes`<sup>Required</sup> <a name="private_key_attributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyAttributes"></a>

```python
private_key_attributes: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference</a>

---

##### `private_key_flags`<sup>Required</sup> <a name="private_key_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyFlags"></a>

```python
private_key_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference</a>

---

##### `subject_name_flags`<sup>Required</sup> <a name="subject_name_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.subjectNameFlags"></a>

```python
subject_name_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference</a>

---

##### `superseded_templates`<sup>Required</sup> <a name="superseded_templates" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.supersededTemplates"></a>

```python
superseded_templates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags">property_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType">property_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `property_flags`<sup>Required</sup> <a name="property_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags"></a>

```python
property_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a>

---

##### `property_type`<sup>Required</sup> <a name="property_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType"></a>

```python
property_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt">decrypt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement">key_agreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign">sign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decrypt`<sup>Required</sup> <a name="decrypt" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt"></a>

```python
decrypt: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement"></a>

```python
key_agreement: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sign`<sup>Required</sup> <a name="sign" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign"></a>

```python
sign: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.cryptoProviders">crypto_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keySpec">key_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keyUsageProperty">key_usage_property</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.minimalKeyLength">minimal_key_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `crypto_providers`<sup>Required</sup> <a name="crypto_providers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.cryptoProviders"></a>

```python
crypto_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_spec`<sup>Required</sup> <a name="key_spec" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keySpec"></a>

```python
key_spec: str
```

- *Type:* str

---

##### `key_usage_property`<sup>Required</sup> <a name="key_usage_property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keyUsageProperty"></a>

```python
key_usage_property: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference</a>

---

##### `minimal_key_length`<sup>Required</sup> <a name="minimal_key_length" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.minimalKeyLength"></a>

```python
minimal_key_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.exportableKey">exportable_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm">require_alternate_signature_algorithm</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired">strong_key_protection_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `exportable_key`<sup>Required</sup> <a name="exportable_key" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.exportableKey"></a>

```python
exportable_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_alternate_signature_algorithm`<sup>Required</sup> <a name="require_alternate_signature_algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm"></a>

```python
require_alternate_signature_algorithm: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strong_key_protection_required`<sup>Required</sup> <a name="strong_key_protection_required" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired"></a>

```python
strong_key_protection_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireCommonName">require_common_name</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDirectoryPath">require_directory_path</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDnsAsCn">require_dns_as_cn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireEmail">require_email</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid">san_require_directory_guid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDns">san_require_dns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDomainDns">san_require_domain_dns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireEmail">san_require_email</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireSpn">san_require_spn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireUpn">san_require_upn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `require_common_name`<sup>Required</sup> <a name="require_common_name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireCommonName"></a>

```python
require_common_name: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_directory_path`<sup>Required</sup> <a name="require_directory_path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDirectoryPath"></a>

```python
require_directory_path: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_dns_as_cn`<sup>Required</sup> <a name="require_dns_as_cn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDnsAsCn"></a>

```python
require_dns_as_cn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_email`<sup>Required</sup> <a name="require_email" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireEmail"></a>

```python
require_email: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_directory_guid`<sup>Required</sup> <a name="san_require_directory_guid" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid"></a>

```python
san_require_directory_guid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_dns`<sup>Required</sup> <a name="san_require_dns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDns"></a>

```python
san_require_dns: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_domain_dns`<sup>Required</sup> <a name="san_require_domain_dns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDomainDns"></a>

```python
san_require_domain_dns: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_email`<sup>Required</sup> <a name="san_require_email" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireEmail"></a>

```python
san_require_email: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_spn`<sup>Required</sup> <a name="san_require_spn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireSpn"></a>

```python
san_require_spn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_upn`<sup>Required</sup> <a name="san_require_upn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireUpn"></a>

```python
san_require_upn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.renewalPeriod">renewal_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.validityPeriod">validity_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.renewalPeriod"></a>

```python
renewal_period: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference</a>

---

##### `validity_period`<sup>Required</sup> <a name="validity_period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.validityPeriod"></a>

```python
validity_period: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.periodType">period_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_type`<sup>Required</sup> <a name="period_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.periodType"></a>

```python
period_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull">enable_key_reuse_on_nt_token_keyset_storage_full</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms">include_symmetric_algorithms</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.noSecurityExtension">no_security_extension</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore">remove_invalid_certificate_from_personal_store</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.userInteractionRequired">user_interaction_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_key_reuse_on_nt_token_keyset_storage_full`<sup>Required</sup> <a name="enable_key_reuse_on_nt_token_keyset_storage_full" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull"></a>

```python
enable_key_reuse_on_nt_token_keyset_storage_full: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_symmetric_algorithms`<sup>Required</sup> <a name="include_symmetric_algorithms" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms"></a>

```python
include_symmetric_algorithms: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `no_security_extension`<sup>Required</sup> <a name="no_security_extension" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.noSecurityExtension"></a>

```python
no_security_extension: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `remove_invalid_certificate_from_personal_store`<sup>Required</sup> <a name="remove_invalid_certificate_from_personal_store" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore"></a>

```python
remove_invalid_certificate_from_personal_store: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `user_interaction_required`<sup>Required</sup> <a name="user_interaction_required" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.userInteractionRequired"></a>

```python
user_interaction_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.critical"></a>

```python
critical: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.policies"></a>

```python
policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier">policy_object_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_object_identifier`<sup>Required</sup> <a name="policy_object_identifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier"></a>

```python
policy_object_identifier: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.usageFlags">usage_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.critical"></a>

```python
critical: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `usage_flags`<sup>Required</sup> <a name="usage_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.usageFlags"></a>

```python
usage_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment">data_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature">digital_signature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement">key_agreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment">key_encipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation">non_repudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_encipherment`<sup>Required</sup> <a name="data_encipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment"></a>

```python
data_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `digital_signature`<sup>Required</sup> <a name="digital_signature" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature"></a>

```python
digital_signature: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement"></a>

```python
key_agreement: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_encipherment`<sup>Required</sup> <a name="key_encipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment"></a>

```python
key_encipherment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `non_repudiation`<sup>Required</sup> <a name="non_repudiation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation"></a>

```python
non_repudiation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.applicationPolicies">application_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_policies`<sup>Required</sup> <a name="application_policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.applicationPolicies"></a>

```python
application_policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference</a>

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.keyUsage"></a>

```python
key_usage: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.autoEnrollment">auto_enrollment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.machineType">machine_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_enrollment`<sup>Required</sup> <a name="auto_enrollment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.autoEnrollment"></a>

```python
auto_enrollment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.machineType"></a>

```python
machine_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.certificateValidity">certificate_validity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.enrollmentFlags">enrollment_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.generalFlags">general_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyAttributes">private_key_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyFlags">private_key_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.subjectNameFlags">subject_name_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.supersededTemplates">superseded_templates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_validity`<sup>Required</sup> <a name="certificate_validity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.certificateValidity"></a>

```python
certificate_validity: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference</a>

---

##### `enrollment_flags`<sup>Required</sup> <a name="enrollment_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.enrollmentFlags"></a>

```python
enrollment_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.extensions"></a>

```python
extensions: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference</a>

---

##### `general_flags`<sup>Required</sup> <a name="general_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.generalFlags"></a>

```python
general_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference</a>

---

##### `hash_algorithm`<sup>Required</sup> <a name="hash_algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

---

##### `private_key_attributes`<sup>Required</sup> <a name="private_key_attributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyAttributes"></a>

```python
private_key_attributes: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference</a>

---

##### `private_key_flags`<sup>Required</sup> <a name="private_key_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyFlags"></a>

```python
private_key_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference</a>

---

##### `subject_name_flags`<sup>Required</sup> <a name="subject_name_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.subjectNameFlags"></a>

```python
subject_name_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference</a>

---

##### `superseded_templates`<sup>Required</sup> <a name="superseded_templates" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.supersededTemplates"></a>

```python
superseded_templates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags">property_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType">property_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `property_flags`<sup>Required</sup> <a name="property_flags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags"></a>

```python
property_flags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a>

---

##### `property_type`<sup>Required</sup> <a name="property_type" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType"></a>

```python
property_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt">decrypt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement">key_agreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign">sign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decrypt`<sup>Required</sup> <a name="decrypt" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt"></a>

```python
decrypt: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement"></a>

```python
key_agreement: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sign`<sup>Required</sup> <a name="sign" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign"></a>

```python
sign: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.cryptoProviders">crypto_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keySpec">key_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keyUsageProperty">key_usage_property</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.minimalKeyLength">minimal_key_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `crypto_providers`<sup>Required</sup> <a name="crypto_providers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.cryptoProviders"></a>

```python
crypto_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_spec`<sup>Required</sup> <a name="key_spec" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keySpec"></a>

```python
key_spec: str
```

- *Type:* str

---

##### `key_usage_property`<sup>Required</sup> <a name="key_usage_property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keyUsageProperty"></a>

```python
key_usage_property: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference</a>

---

##### `minimal_key_length`<sup>Required</sup> <a name="minimal_key_length" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.minimalKeyLength"></a>

```python
minimal_key_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.exportableKey">exportable_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm">require_alternate_signature_algorithm</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireSameKeyRenewal">require_same_key_renewal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired">strong_key_protection_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.useLegacyProvider">use_legacy_provider</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `exportable_key`<sup>Required</sup> <a name="exportable_key" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.exportableKey"></a>

```python
exportable_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_alternate_signature_algorithm`<sup>Required</sup> <a name="require_alternate_signature_algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm"></a>

```python
require_alternate_signature_algorithm: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_same_key_renewal`<sup>Required</sup> <a name="require_same_key_renewal" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireSameKeyRenewal"></a>

```python
require_same_key_renewal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `strong_key_protection_required`<sup>Required</sup> <a name="strong_key_protection_required" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired"></a>

```python
strong_key_protection_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_legacy_provider`<sup>Required</sup> <a name="use_legacy_provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.useLegacyProvider"></a>

```python
use_legacy_provider: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_pcaconnectorad_template

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireCommonName">require_common_name</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDirectoryPath">require_directory_path</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDnsAsCn">require_dns_as_cn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireEmail">require_email</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid">san_require_directory_guid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDns">san_require_dns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDomainDns">san_require_domain_dns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireEmail">san_require_email</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireSpn">san_require_spn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireUpn">san_require_upn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `require_common_name`<sup>Required</sup> <a name="require_common_name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireCommonName"></a>

```python
require_common_name: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_directory_path`<sup>Required</sup> <a name="require_directory_path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDirectoryPath"></a>

```python
require_directory_path: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_dns_as_cn`<sup>Required</sup> <a name="require_dns_as_cn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDnsAsCn"></a>

```python
require_dns_as_cn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `require_email`<sup>Required</sup> <a name="require_email" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireEmail"></a>

```python
require_email: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_directory_guid`<sup>Required</sup> <a name="san_require_directory_guid" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid"></a>

```python
san_require_directory_guid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_dns`<sup>Required</sup> <a name="san_require_dns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDns"></a>

```python
san_require_dns: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_domain_dns`<sup>Required</sup> <a name="san_require_domain_dns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDomainDns"></a>

```python
san_require_domain_dns: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_email`<sup>Required</sup> <a name="san_require_email" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireEmail"></a>

```python
san_require_email: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_spn`<sup>Required</sup> <a name="san_require_spn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireSpn"></a>

```python
san_require_spn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `san_require_upn`<sup>Required</sup> <a name="san_require_upn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireUpn"></a>

```python
san_require_upn: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags</a>

---



