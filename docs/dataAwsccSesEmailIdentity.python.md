# `dataAwsccSesEmailIdentity` Submodule <a name="`dataAwsccSesEmailIdentity` Submodule" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesEmailIdentity <a name="DataAwsccSesEmailIdentity" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_email_identity awscc_ses_email_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_email_identity#id DataAwsccSesEmailIdentity#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSesEmailIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSesEmailIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSesEmailIdentity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSesEmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesEmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.configurationSetAttributes">configuration_set_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference">DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimAttributes">dkim_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference">DataAwsccSesEmailIdentityDkimAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName1">dkim_dns_token_name1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName2">dkim_dns_token_name2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName3">dkim_dns_token_name3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue1">dkim_dns_token_value1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue2">dkim_dns_token_value2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue3">dkim_dns_token_value3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference">DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.emailIdentity">email_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.feedbackAttributes">feedback_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference">DataAwsccSesEmailIdentityFeedbackAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.mailFromAttributes">mail_from_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference">DataAwsccSesEmailIdentityMailFromAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList">DataAwsccSesEmailIdentityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration_set_attributes`<sup>Required</sup> <a name="configuration_set_attributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.configurationSetAttributes"></a>

```python
configuration_set_attributes: DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference">DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference</a>

---

##### `dkim_attributes`<sup>Required</sup> <a name="dkim_attributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimAttributes"></a>

```python
dkim_attributes: DataAwsccSesEmailIdentityDkimAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference">DataAwsccSesEmailIdentityDkimAttributesOutputReference</a>

---

##### `dkim_dns_token_name1`<sup>Required</sup> <a name="dkim_dns_token_name1" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName1"></a>

```python
dkim_dns_token_name1: str
```

- *Type:* str

---

##### `dkim_dns_token_name2`<sup>Required</sup> <a name="dkim_dns_token_name2" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName2"></a>

```python
dkim_dns_token_name2: str
```

- *Type:* str

---

##### `dkim_dns_token_name3`<sup>Required</sup> <a name="dkim_dns_token_name3" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName3"></a>

```python
dkim_dns_token_name3: str
```

- *Type:* str

---

##### `dkim_dns_token_value1`<sup>Required</sup> <a name="dkim_dns_token_value1" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue1"></a>

```python
dkim_dns_token_value1: str
```

- *Type:* str

---

##### `dkim_dns_token_value2`<sup>Required</sup> <a name="dkim_dns_token_value2" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue2"></a>

```python
dkim_dns_token_value2: str
```

- *Type:* str

---

##### `dkim_dns_token_value3`<sup>Required</sup> <a name="dkim_dns_token_value3" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue3"></a>

```python
dkim_dns_token_value3: str
```

- *Type:* str

---

##### `dkim_signing_attributes`<sup>Required</sup> <a name="dkim_signing_attributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimSigningAttributes"></a>

```python
dkim_signing_attributes: DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference">DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

---

##### `feedback_attributes`<sup>Required</sup> <a name="feedback_attributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.feedbackAttributes"></a>

```python
feedback_attributes: DataAwsccSesEmailIdentityFeedbackAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference">DataAwsccSesEmailIdentityFeedbackAttributesOutputReference</a>

---

##### `mail_from_attributes`<sup>Required</sup> <a name="mail_from_attributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.mailFromAttributes"></a>

```python
mail_from_attributes: DataAwsccSesEmailIdentityMailFromAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference">DataAwsccSesEmailIdentityMailFromAttributesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tags"></a>

```python
tags: DataAwsccSesEmailIdentityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList">DataAwsccSesEmailIdentityTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesEmailIdentityConfig <a name="DataAwsccSesEmailIdentityConfig" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_email_identity#id DataAwsccSesEmailIdentity#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesEmailIdentityConfigurationSetAttributes <a name="DataAwsccSesEmailIdentityConfigurationSetAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes()
```


### DataAwsccSesEmailIdentityDkimAttributes <a name="DataAwsccSesEmailIdentityDkimAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes()
```


### DataAwsccSesEmailIdentityDkimSigningAttributes <a name="DataAwsccSesEmailIdentityDkimSigningAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes()
```


### DataAwsccSesEmailIdentityFeedbackAttributes <a name="DataAwsccSesEmailIdentityFeedbackAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes()
```


### DataAwsccSesEmailIdentityMailFromAttributes <a name="DataAwsccSesEmailIdentityMailFromAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes()
```


### DataAwsccSesEmailIdentityTags <a name="DataAwsccSesEmailIdentityTags" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference <a name="DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes">DataAwsccSesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesEmailIdentityConfigurationSetAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes">DataAwsccSesEmailIdentityConfigurationSetAttributes</a>

---


### DataAwsccSesEmailIdentityDkimAttributesOutputReference <a name="DataAwsccSesEmailIdentityDkimAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.signingEnabled">signing_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes">DataAwsccSesEmailIdentityDkimAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_enabled`<sup>Required</sup> <a name="signing_enabled" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.signingEnabled"></a>

```python
signing_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesEmailIdentityDkimAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes">DataAwsccSesEmailIdentityDkimAttributes</a>

---


### DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference <a name="DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domain_signing_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domain_signing_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">next_signing_key_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes">DataAwsccSesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_signing_private_key`<sup>Required</sup> <a name="domain_signing_private_key" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```python
domain_signing_private_key: str
```

- *Type:* str

---

##### `domain_signing_selector`<sup>Required</sup> <a name="domain_signing_selector" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```python
domain_signing_selector: str
```

- *Type:* str

---

##### `next_signing_key_length`<sup>Required</sup> <a name="next_signing_key_length" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```python
next_signing_key_length: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesEmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes">DataAwsccSesEmailIdentityDkimSigningAttributes</a>

---


### DataAwsccSesEmailIdentityFeedbackAttributesOutputReference <a name="DataAwsccSesEmailIdentityFeedbackAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled">email_forwarding_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes">DataAwsccSesEmailIdentityFeedbackAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_forwarding_enabled`<sup>Required</sup> <a name="email_forwarding_enabled" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled"></a>

```python
email_forwarding_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesEmailIdentityFeedbackAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes">DataAwsccSesEmailIdentityFeedbackAttributes</a>

---


### DataAwsccSesEmailIdentityMailFromAttributesOutputReference <a name="DataAwsccSesEmailIdentityMailFromAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure">behavior_on_mx_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain">mail_from_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes">DataAwsccSesEmailIdentityMailFromAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior_on_mx_failure`<sup>Required</sup> <a name="behavior_on_mx_failure" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure"></a>

```python
behavior_on_mx_failure: str
```

- *Type:* str

---

##### `mail_from_domain`<sup>Required</sup> <a name="mail_from_domain" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain"></a>

```python
mail_from_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesEmailIdentityMailFromAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes">DataAwsccSesEmailIdentityMailFromAttributes</a>

---


### DataAwsccSesEmailIdentityTagsList <a name="DataAwsccSesEmailIdentityTagsList" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesEmailIdentityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesEmailIdentityTagsOutputReference <a name="DataAwsccSesEmailIdentityTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_email_identity

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags">DataAwsccSesEmailIdentityTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesEmailIdentityTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags">DataAwsccSesEmailIdentityTags</a>

---



