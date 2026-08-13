# `dataAwsccResiliencehubv2Service` Submodule <a name="`dataAwsccResiliencehubv2Service` Submodule" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResiliencehubv2Service <a name="DataAwsccResiliencehubv2Service" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehubv2_service awscc_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehubv2_service#id DataAwsccResiliencehubv2Service#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccResiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccResiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccResiliencehubv2Service to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccResiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.assertions">assertions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList">DataAwsccResiliencehubv2ServiceAssertionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.associatedSystems">associated_systems</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList">DataAwsccResiliencehubv2ServiceAssociatedSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependencyDiscovery">dependency_discovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.effectivePolicyValues">effective_policy_values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.inputSources">input_sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList">DataAwsccResiliencehubv2ServiceInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.permissionModel">permission_model</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference">DataAwsccResiliencehubv2ServicePermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.reportConfiguration">report_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList">DataAwsccResiliencehubv2ServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `assertions`<sup>Required</sup> <a name="assertions" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.assertions"></a>

```python
assertions: DataAwsccResiliencehubv2ServiceAssertionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList">DataAwsccResiliencehubv2ServiceAssertionsList</a>

---

##### `associated_systems`<sup>Required</sup> <a name="associated_systems" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.associatedSystems"></a>

```python
associated_systems: DataAwsccResiliencehubv2ServiceAssociatedSystemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList">DataAwsccResiliencehubv2ServiceAssociatedSystemsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dependency_discovery`<sup>Required</sup> <a name="dependency_discovery" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependencyDiscovery"></a>

```python
dependency_discovery: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_policy_values`<sup>Required</sup> <a name="effective_policy_values" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.effectivePolicyValues"></a>

```python
effective_policy_values: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference</a>

---

##### `input_sources`<sup>Required</sup> <a name="input_sources" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.inputSources"></a>

```python
input_sources: DataAwsccResiliencehubv2ServiceInputSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList">DataAwsccResiliencehubv2ServiceInputSourcesList</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.permissionModel"></a>

```python
permission_model: DataAwsccResiliencehubv2ServicePermissionModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference">DataAwsccResiliencehubv2ServicePermissionModelOutputReference</a>

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `report_configuration`<sup>Required</sup> <a name="report_configuration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.reportConfiguration"></a>

```python
report_configuration: DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference</a>

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tags"></a>

```python
tags: DataAwsccResiliencehubv2ServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList">DataAwsccResiliencehubv2ServiceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResiliencehubv2ServiceAssertions <a name="DataAwsccResiliencehubv2ServiceAssertions" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions()
```


### DataAwsccResiliencehubv2ServiceAssociatedSystems <a name="DataAwsccResiliencehubv2ServiceAssociatedSystems" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems()
```


### DataAwsccResiliencehubv2ServiceConfig <a name="DataAwsccResiliencehubv2ServiceConfig" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehubv2_service#id DataAwsccResiliencehubv2Service#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResiliencehubv2ServiceEffectivePolicyValues <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValues" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues()
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo()
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach()
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo()
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto()
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach()
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo()
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto()
```


### DataAwsccResiliencehubv2ServiceInputSources <a name="DataAwsccResiliencehubv2ServiceInputSources" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources()
```


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration()
```


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks()
```


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags()
```


### DataAwsccResiliencehubv2ServicePermissionModel <a name="DataAwsccResiliencehubv2ServicePermissionModel" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel()
```


### DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns <a name="DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns()
```


### DataAwsccResiliencehubv2ServiceReportConfiguration <a name="DataAwsccResiliencehubv2ServiceReportConfiguration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration()
```


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput()
```


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3 <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3()
```


### DataAwsccResiliencehubv2ServiceTags <a name="DataAwsccResiliencehubv2ServiceTags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResiliencehubv2ServiceAssertionsList <a name="DataAwsccResiliencehubv2ServiceAssertionsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccResiliencehubv2ServiceAssertionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccResiliencehubv2ServiceAssertionsOutputReference <a name="DataAwsccResiliencehubv2ServiceAssertionsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions">DataAwsccResiliencehubv2ServiceAssertions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceAssertions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions">DataAwsccResiliencehubv2ServiceAssertions</a>

---


### DataAwsccResiliencehubv2ServiceAssociatedSystemsList <a name="DataAwsccResiliencehubv2ServiceAssociatedSystemsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference <a name="DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn">system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds">user_journey_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems">DataAwsccResiliencehubv2ServiceAssociatedSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_arn`<sup>Required</sup> <a name="system_arn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn"></a>

```python
system_arn: str
```

- *Type:* str

---

##### `user_journey_ids`<sup>Required</sup> <a name="user_journey_ids" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds"></a>

```python
user_journey_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceAssociatedSystems
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems">DataAwsccResiliencehubv2ServiceAssociatedSystems</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo">availability_slo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach">multi_az_dr_approach</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo">multi_az_rpo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto">multi_az_rto</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach">multi_region_dr_approach</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo">multi_region_rpo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto">multi_region_rto</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues">DataAwsccResiliencehubv2ServiceEffectivePolicyValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_slo`<sup>Required</sup> <a name="availability_slo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo"></a>

```python
availability_slo: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a>

---

##### `multi_az_dr_approach`<sup>Required</sup> <a name="multi_az_dr_approach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach"></a>

```python
multi_az_dr_approach: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a>

---

##### `multi_az_rpo`<sup>Required</sup> <a name="multi_az_rpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo"></a>

```python
multi_az_rpo: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a>

---

##### `multi_az_rto`<sup>Required</sup> <a name="multi_az_rto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto"></a>

```python
multi_az_rto: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a>

---

##### `multi_region_dr_approach`<sup>Required</sup> <a name="multi_region_dr_approach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach"></a>

```python
multi_region_dr_approach: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a>

---

##### `multi_region_rpo`<sup>Required</sup> <a name="multi_region_rpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo"></a>

```python
multi_region_rpo: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a>

---

##### `multi_region_rto`<sup>Required</sup> <a name="multi_region_rto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto"></a>

```python
multi_region_rto: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceEffectivePolicyValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues">DataAwsccResiliencehubv2ServiceEffectivePolicyValues</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesList <a name="DataAwsccResiliencehubv2ServiceInputSourcesList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccResiliencehubv2ServiceInputSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccResiliencehubv2ServiceInputSourcesOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration">resource_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources">DataAwsccResiliencehubv2ServiceInputSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration`<sup>Required</sup> <a name="resource_configuration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration"></a>

```python
resource_configuration: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceInputSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources">DataAwsccResiliencehubv2ServiceInputSources</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn">cfn_stack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url">design_file_s3_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl">tf_state_file_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cfn_stack_arn`<sup>Required</sup> <a name="cfn_stack_arn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn"></a>

```python
cfn_stack_arn: str
```

- *Type:* str

---

##### `design_file_s3_url`<sup>Required</sup> <a name="design_file_s3_url" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url"></a>

```python
design_file_s3_url: str
```

- *Type:* str

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks"></a>

```python
eks: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a>

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags"></a>

```python
resource_tags: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a>

---

##### `tf_state_file_url`<sup>Required</sup> <a name="tf_state_file_url" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```python
tf_state_file_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>

---


### DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList <a name="DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference <a name="DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn">cross_account_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role_arn`<sup>Required</sup> <a name="cross_account_role_arn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn"></a>

```python
cross_account_role_arn: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>

---


### DataAwsccResiliencehubv2ServicePermissionModelOutputReference <a name="DataAwsccResiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns">cross_account_role_arns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">invoker_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel">DataAwsccResiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role_arns`<sup>Required</sup> <a name="cross_account_role_arns" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns"></a>

```python
cross_account_role_arns: DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a>

---

##### `invoker_role_name`<sup>Required</sup> <a name="invoker_role_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```python
invoker_role_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServicePermissionModel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel">DataAwsccResiliencehubv2ServicePermissionModel</a>

---


### DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference <a name="DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput">report_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration">DataAwsccResiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_output`<sup>Required</sup> <a name="report_output" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput"></a>

```python
report_output: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceReportConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration">DataAwsccResiliencehubv2ServiceReportConfiguration</a>

---


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3"></a>

```python
s3: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput</a>

---


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath">bucket_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `bucket_path`<sup>Required</sup> <a name="bucket_path" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath"></a>

```python
bucket_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---


### DataAwsccResiliencehubv2ServiceTagsList <a name="DataAwsccResiliencehubv2ServiceTagsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccResiliencehubv2ServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccResiliencehubv2ServiceTagsOutputReference <a name="DataAwsccResiliencehubv2ServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resiliencehubv2_service

dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags">DataAwsccResiliencehubv2ServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccResiliencehubv2ServiceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags">DataAwsccResiliencehubv2ServiceTags</a>

---



