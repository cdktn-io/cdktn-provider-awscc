# `licensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule <a name="`licensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProvider <a name="LicensemanagerlinuxsubscriptionsSubscriptionProvider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider awscc_licensemanagerlinuxsubscriptions_subscription_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  secret_arn: str,
  subscription_provider_source: str,
  tags: IResolvable | typing.List[LicensemanagerlinuxsubscriptionsSubscriptionProviderTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.secretArn">secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.subscriptionProviderSource">subscription_provider_source</a></code> | <code>str</code> | The Linux subscription provider that the registration is for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]</code> | The metadata tags assigned to the registered subscription provider. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.secretArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#secret_arn LicensemanagerlinuxsubscriptionsSubscriptionProvider#secret_arn}

---

##### `subscription_provider_source`<sup>Required</sup> <a name="subscription_provider_source" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.subscriptionProviderSource"></a>

- *Type:* str

The Linux subscription provider that the registration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#subscription_provider_source LicensemanagerlinuxsubscriptionsSubscriptionProvider#subscription_provider_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]

The metadata tags assigned to the registered subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#tags LicensemanagerlinuxsubscriptionsSubscriptionProvider#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LicensemanagerlinuxsubscriptionsSubscriptionProviderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicensemanagerlinuxsubscriptionsSubscriptionProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicensemanagerlinuxsubscriptionsSubscriptionProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerlinuxsubscriptionsSubscriptionProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime">last_successful_data_retrieval_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn">subscription_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus">subscription_provider_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage">subscription_provider_status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSourceInput">subscription_provider_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource">subscription_provider_source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_successful_data_retrieval_time`<sup>Required</sup> <a name="last_successful_data_retrieval_time" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime"></a>

```python
last_successful_data_retrieval_time: str
```

- *Type:* str

---

##### `subscription_provider_arn`<sup>Required</sup> <a name="subscription_provider_arn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn"></a>

```python
subscription_provider_arn: str
```

- *Type:* str

---

##### `subscription_provider_status`<sup>Required</sup> <a name="subscription_provider_status" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus"></a>

```python
subscription_provider_status: str
```

- *Type:* str

---

##### `subscription_provider_status_message`<sup>Required</sup> <a name="subscription_provider_status_message" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage"></a>

```python
subscription_provider_status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags"></a>

```python
tags: LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a>

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `subscription_provider_source_input`<sup>Optional</sup> <a name="subscription_provider_source_input" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSourceInput"></a>

```python
subscription_provider_source_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LicensemanagerlinuxsubscriptionsSubscriptionProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `subscription_provider_source`<sup>Required</sup> <a name="subscription_provider_source" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource"></a>

```python
subscription_provider_source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  secret_arn: str,
  subscription_provider_source: str,
  tags: IResolvable | typing.List[LicensemanagerlinuxsubscriptionsSubscriptionProviderTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.subscriptionProviderSource">subscription_provider_source</a></code> | <code>str</code> | The Linux subscription provider that the registration is for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]</code> | The metadata tags assigned to the registered subscription provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#secret_arn LicensemanagerlinuxsubscriptionsSubscriptionProvider#secret_arn}

---

##### `subscription_provider_source`<sup>Required</sup> <a name="subscription_provider_source" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.subscriptionProviderSource"></a>

```python
subscription_provider_source: str
```

- *Type:* str

The Linux subscription provider that the registration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#subscription_provider_source LicensemanagerlinuxsubscriptionsSubscriptionProvider#subscription_provider_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LicensemanagerlinuxsubscriptionsSubscriptionProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]

The metadata tags assigned to the registered subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#tags LicensemanagerlinuxsubscriptionsSubscriptionProvider#tags}

---

### LicensemanagerlinuxsubscriptionsSubscriptionProviderTags <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#key LicensemanagerlinuxsubscriptionsSubscriptionProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#value LicensemanagerlinuxsubscriptionsSubscriptionProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerlinuxsubscriptionsSubscriptionProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>]

---


### LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerlinuxsubscriptions_subscription_provider

licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerlinuxsubscriptionsSubscriptionProviderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>

---



