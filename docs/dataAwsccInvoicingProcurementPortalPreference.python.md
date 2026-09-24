# `dataAwsccInvoicingProcurementPortalPreference` Submodule <a name="`dataAwsccInvoicingProcurementPortalPreference` Submodule" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInvoicingProcurementPortalPreference <a name="DataAwsccInvoicingProcurementPortalPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/invoicing_procurement_portal_preference#id DataAwsccInvoicingProcurementPortalPreference#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccInvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccInvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccInvoicingProcurementPortalPreference to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccInvoicingProcurementPortalPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInvoicingProcurementPortalPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerDomain">buyer_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerIdentifier">buyer_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.contacts">contacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList">DataAwsccInvoicingProcurementPortalPreferenceContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled">einvoice_delivery_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference">einvoice_delivery_preference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus">einvoice_delivery_preference_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lastUpdateDate">last_update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint">procurement_portal_instance_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalName">procurement_portal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn">procurement_portal_preference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalSharedSecret">procurement_portal_shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled">purchase_order_retrieval_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint">purchase_order_retrieval_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus">purchase_order_retrieval_preference_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.selector">selector</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference">DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierDomain">supplier_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierIdentifier">supplier_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList">DataAwsccInvoicingProcurementPortalPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.testEnvPreference">test_env_preference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `buyer_domain`<sup>Required</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerDomain"></a>

```python
buyer_domain: str
```

- *Type:* str

---

##### `buyer_identifier`<sup>Required</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerIdentifier"></a>

```python
buyer_identifier: str
```

- *Type:* str

---

##### `contacts`<sup>Required</sup> <a name="contacts" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.contacts"></a>

```python
contacts: DataAwsccInvoicingProcurementPortalPreferenceContactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList">DataAwsccInvoicingProcurementPortalPreferenceContactsList</a>

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `einvoice_delivery_enabled`<sup>Required</sup> <a name="einvoice_delivery_enabled" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled"></a>

```python
einvoice_delivery_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `einvoice_delivery_preference`<sup>Required</sup> <a name="einvoice_delivery_preference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference"></a>

```python
einvoice_delivery_preference: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a>

---

##### `einvoice_delivery_preference_status`<sup>Required</sup> <a name="einvoice_delivery_preference_status" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus"></a>

```python
einvoice_delivery_preference_status: str
```

- *Type:* str

---

##### `last_update_date`<sup>Required</sup> <a name="last_update_date" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lastUpdateDate"></a>

```python
last_update_date: str
```

- *Type:* str

---

##### `procurement_portal_instance_endpoint`<sup>Required</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint"></a>

```python
procurement_portal_instance_endpoint: str
```

- *Type:* str

---

##### `procurement_portal_name`<sup>Required</sup> <a name="procurement_portal_name" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalName"></a>

```python
procurement_portal_name: str
```

- *Type:* str

---

##### `procurement_portal_preference_arn`<sup>Required</sup> <a name="procurement_portal_preference_arn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn"></a>

```python
procurement_portal_preference_arn: str
```

- *Type:* str

---

##### `procurement_portal_shared_secret`<sup>Required</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalSharedSecret"></a>

```python
procurement_portal_shared_secret: str
```

- *Type:* str

---

##### `purchase_order_retrieval_enabled`<sup>Required</sup> <a name="purchase_order_retrieval_enabled" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled"></a>

```python
purchase_order_retrieval_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `purchase_order_retrieval_endpoint`<sup>Required</sup> <a name="purchase_order_retrieval_endpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint"></a>

```python
purchase_order_retrieval_endpoint: str
```

- *Type:* str

---

##### `purchase_order_retrieval_preference_status`<sup>Required</sup> <a name="purchase_order_retrieval_preference_status" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus"></a>

```python
purchase_order_retrieval_preference_status: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.selector"></a>

```python
selector: DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference">DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference</a>

---

##### `supplier_domain`<sup>Required</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierDomain"></a>

```python
supplier_domain: str
```

- *Type:* str

---

##### `supplier_identifier`<sup>Required</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierIdentifier"></a>

```python
supplier_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tags"></a>

```python
tags: DataAwsccInvoicingProcurementPortalPreferenceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList">DataAwsccInvoicingProcurementPortalPreferenceTagsList</a>

---

##### `test_env_preference`<sup>Required</sup> <a name="test_env_preference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.testEnvPreference"></a>

```python
test_env_preference: DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInvoicingProcurementPortalPreferenceConfig <a name="DataAwsccInvoicingProcurementPortalPreferenceConfig" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/invoicing_procurement_portal_preference#id DataAwsccInvoicingProcurementPortalPreference#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInvoicingProcurementPortalPreferenceContacts <a name="DataAwsccInvoicingProcurementPortalPreferenceContacts" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts()
```


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference()
```


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources()
```


### DataAwsccInvoicingProcurementPortalPreferenceSelector <a name="DataAwsccInvoicingProcurementPortalPreferenceSelector" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector()
```


### DataAwsccInvoicingProcurementPortalPreferenceTags <a name="DataAwsccInvoicingProcurementPortalPreferenceTags" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags()
```


### DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference <a name="DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInvoicingProcurementPortalPreferenceContactsList <a name="DataAwsccInvoicingProcurementPortalPreferenceContactsList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts">DataAwsccInvoicingProcurementPortalPreferenceContacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingProcurementPortalPreferenceContacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts">DataAwsccInvoicingProcurementPortalPreferenceContacts</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod">connection_testing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate">einvoice_delivery_activation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes">einvoice_delivery_attachment_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes">einvoice_delivery_document_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources">purchase_order_data_sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_testing_method`<sup>Required</sup> <a name="connection_testing_method" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod"></a>

```python
connection_testing_method: str
```

- *Type:* str

---

##### `einvoice_delivery_activation_date`<sup>Required</sup> <a name="einvoice_delivery_activation_date" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate"></a>

```python
einvoice_delivery_activation_date: str
```

- *Type:* str

---

##### `einvoice_delivery_attachment_types`<sup>Required</sup> <a name="einvoice_delivery_attachment_types" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes"></a>

```python
einvoice_delivery_attachment_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `einvoice_delivery_document_types`<sup>Required</sup> <a name="einvoice_delivery_document_types" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes"></a>

```python
einvoice_delivery_document_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `purchase_order_data_sources`<sup>Required</sup> <a name="purchase_order_data_sources" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources"></a>

```python
purchase_order_data_sources: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType">einvoice_delivery_document_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType">purchase_order_data_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `einvoice_delivery_document_type`<sup>Required</sup> <a name="einvoice_delivery_document_type" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType"></a>

```python
einvoice_delivery_document_type: str
```

- *Type:* str

---

##### `purchase_order_data_source_type`<sup>Required</sup> <a name="purchase_order_data_source_type" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType"></a>

```python
purchase_order_data_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns">invoice_unit_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector">DataAwsccInvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoice_unit_arns`<sup>Required</sup> <a name="invoice_unit_arns" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns"></a>

```python
invoice_unit_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingProcurementPortalPreferenceSelector
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector">DataAwsccInvoicingProcurementPortalPreferenceSelector</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceTagsList <a name="DataAwsccInvoicingProcurementPortalPreferenceTagsList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags">DataAwsccInvoicingProcurementPortalPreferenceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingProcurementPortalPreferenceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags">DataAwsccInvoicingProcurementPortalPreferenceTags</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_invoicing_procurement_portal_preference

dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain">buyer_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier">buyer_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint">procurement_portal_instance_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret">procurement_portal_shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain">supplier_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier">supplier_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `buyer_domain`<sup>Required</sup> <a name="buyer_domain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain"></a>

```python
buyer_domain: str
```

- *Type:* str

---

##### `buyer_identifier`<sup>Required</sup> <a name="buyer_identifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier"></a>

```python
buyer_identifier: str
```

- *Type:* str

---

##### `procurement_portal_instance_endpoint`<sup>Required</sup> <a name="procurement_portal_instance_endpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint"></a>

```python
procurement_portal_instance_endpoint: str
```

- *Type:* str

---

##### `procurement_portal_shared_secret`<sup>Required</sup> <a name="procurement_portal_shared_secret" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret"></a>

```python
procurement_portal_shared_secret: str
```

- *Type:* str

---

##### `supplier_domain`<sup>Required</sup> <a name="supplier_domain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain"></a>

```python
supplier_domain: str
```

- *Type:* str

---

##### `supplier_identifier`<sup>Required</sup> <a name="supplier_identifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier"></a>

```python
supplier_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference</a>

---



