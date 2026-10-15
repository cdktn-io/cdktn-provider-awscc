# `dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule <a name="`dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerlinuxsubscriptions_subscription_provider awscc_licensemanagerlinuxsubscriptions_subscription_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerlinuxsubscriptions_subscription_provider#id DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerlinuxsubscriptions_subscription_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime">last_successful_data_retrieval_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn">subscription_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource">subscription_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus">subscription_provider_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage">subscription_provider_status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `last_successful_data_retrieval_time`<sup>Required</sup> <a name="last_successful_data_retrieval_time" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime"></a>

```python
last_successful_data_retrieval_time: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `subscription_provider_arn`<sup>Required</sup> <a name="subscription_provider_arn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn"></a>

```python
subscription_provider_arn: str
```

- *Type:* str

---

##### `subscription_provider_source`<sup>Required</sup> <a name="subscription_provider_source" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource"></a>

```python
subscription_provider_source: str
```

- *Type:* str

---

##### `subscription_provider_status`<sup>Required</sup> <a name="subscription_provider_status" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus"></a>

```python
subscription_provider_status: str
```

- *Type:* str

---

##### `subscription_provider_status_message`<sup>Required</sup> <a name="subscription_provider_status_message" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage"></a>

```python
subscription_provider_status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags"></a>

```python
tags: DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerlinuxsubscriptions_subscription_provider#id DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_licensemanagerlinuxsubscriptions_subscription_provider

dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>

---



