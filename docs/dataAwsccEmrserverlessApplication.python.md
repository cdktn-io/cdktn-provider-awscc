# `dataAwsccEmrserverlessApplication` Submodule <a name="`dataAwsccEmrserverlessApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEmrserverlessApplication <a name="DataAwsccEmrserverlessApplication" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/emrserverless_application awscc_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/emrserverless_application#id DataAwsccEmrserverlessApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEmrserverlessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEmrserverlessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEmrserverlessApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEmrserverlessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/emrserverless_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEmrserverlessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStartConfiguration">auto_start_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStopConfiguration">auto_stop_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.initialCapacity">initial_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList">DataAwsccEmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.maximumCapacity">maximum_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference">DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference">DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.releaseLabel">release_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList">DataAwsccEmrserverlessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.workerTypeSpecifications">worker_type_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_start_configuration`<sup>Required</sup> <a name="auto_start_configuration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStartConfiguration"></a>

```python
auto_start_configuration: DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `auto_stop_configuration`<sup>Required</sup> <a name="auto_stop_configuration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStopConfiguration"></a>

```python
auto_stop_configuration: DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `image_configuration`<sup>Required</sup> <a name="image_configuration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.imageConfiguration"></a>

```python
image_configuration: DataAwsccEmrserverlessApplicationImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationImageConfigurationOutputReference</a>

---

##### `initial_capacity`<sup>Required</sup> <a name="initial_capacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.initialCapacity"></a>

```python
initial_capacity: DataAwsccEmrserverlessApplicationInitialCapacityList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList">DataAwsccEmrserverlessApplicationInitialCapacityList</a>

---

##### `maximum_capacity`<sup>Required</sup> <a name="maximum_capacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.maximumCapacity"></a>

```python
maximum_capacity: DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference">DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference">DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tags"></a>

```python
tags: DataAwsccEmrserverlessApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList">DataAwsccEmrserverlessApplicationTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `worker_type_specifications`<sup>Required</sup> <a name="worker_type_specifications" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.workerTypeSpecifications"></a>

```python
worker_type_specifications: DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEmrserverlessApplicationAutoStartConfiguration <a name="DataAwsccEmrserverlessApplicationAutoStartConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration()
```


### DataAwsccEmrserverlessApplicationAutoStopConfiguration <a name="DataAwsccEmrserverlessApplicationAutoStopConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration()
```


### DataAwsccEmrserverlessApplicationConfig <a name="DataAwsccEmrserverlessApplicationConfig" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/emrserverless_application#id DataAwsccEmrserverlessApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEmrserverlessApplicationImageConfiguration <a name="DataAwsccEmrserverlessApplicationImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration()
```


### DataAwsccEmrserverlessApplicationInitialCapacity <a name="DataAwsccEmrserverlessApplicationInitialCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity()
```


### DataAwsccEmrserverlessApplicationInitialCapacityValue <a name="DataAwsccEmrserverlessApplicationInitialCapacityValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue()
```


### DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration()
```


### DataAwsccEmrserverlessApplicationMaximumCapacity <a name="DataAwsccEmrserverlessApplicationMaximumCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity()
```


### DataAwsccEmrserverlessApplicationNetworkConfiguration <a name="DataAwsccEmrserverlessApplicationNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration()
```


### DataAwsccEmrserverlessApplicationTags <a name="DataAwsccEmrserverlessApplicationTags" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags()
```


### DataAwsccEmrserverlessApplicationWorkerTypeSpecifications <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications()
```


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration">DataAwsccEmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration">DataAwsccEmrserverlessApplicationAutoStartConfiguration</a>

---


### DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">idle_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration">DataAwsccEmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `idle_timeout_minutes`<sup>Required</sup> <a name="idle_timeout_minutes" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```python
idle_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration">DataAwsccEmrserverlessApplicationAutoStopConfiguration</a>

---


### DataAwsccEmrserverlessApplicationImageConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationImageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration">DataAwsccEmrserverlessApplicationImageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration">DataAwsccEmrserverlessApplicationImageConfiguration</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityList <a name="DataAwsccEmrserverlessApplicationInitialCapacityList" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEmrserverlessApplicationInitialCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEmrserverlessApplicationInitialCapacityOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity">DataAwsccEmrserverlessApplicationInitialCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.value"></a>

```python
value: DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationInitialCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity">DataAwsccEmrserverlessApplicationInitialCapacity</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue">DataAwsccEmrserverlessApplicationInitialCapacityValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker_configuration`<sup>Required</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration"></a>

```python
worker_configuration: DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a>

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationInitialCapacityValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue">DataAwsccEmrserverlessApplicationInitialCapacityValue</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---


### DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference <a name="DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity">DataAwsccEmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity">DataAwsccEmrserverlessApplicationMaximumCapacity</a>

---


### DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration">DataAwsccEmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration">DataAwsccEmrserverlessApplicationNetworkConfiguration</a>

---


### DataAwsccEmrserverlessApplicationTagsList <a name="DataAwsccEmrserverlessApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEmrserverlessApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEmrserverlessApplicationTagsOutputReference <a name="DataAwsccEmrserverlessApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags">DataAwsccEmrserverlessApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags">DataAwsccEmrserverlessApplicationTags</a>

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_emrserverless_application

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications">DataAwsccEmrserverlessApplicationWorkerTypeSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_configuration`<sup>Required</sup> <a name="image_configuration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration"></a>

```python
image_configuration: DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEmrserverlessApplicationWorkerTypeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications">DataAwsccEmrserverlessApplicationWorkerTypeSpecifications</a>

---



