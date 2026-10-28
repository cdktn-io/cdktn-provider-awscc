# `licensemanagerusersubscriptionsLicenseServerEndpoint` Submodule <a name="`licensemanagerusersubscriptionsLicenseServerEndpoint` Submodule" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerusersubscriptionsLicenseServerEndpoint <a name="LicensemanagerusersubscriptionsLicenseServerEndpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint awscc_licensemanagerusersubscriptions_license_server_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_provider_arn: str,
  license_server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings = None,
  tags: IResolvable | typing.List[LicensemanagerusersubscriptionsLicenseServerEndpointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.identityProviderArn">identity_provider_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.licenseServerSettings">license_server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a></code> | The settings of the RDS license server to create the endpoint for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]</code> | The tags that apply for the license server endpoint. A maximum of 50 tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_provider_arn`<sup>Required</sup> <a name="identity_provider_arn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.identityProviderArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for.

For Active Directory, that can be a self-managed Active Directory or an AWS Managed Microsoft AD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#identity_provider_arn LicensemanagerusersubscriptionsLicenseServerEndpoint#identity_provider_arn}

---

##### `license_server_settings`<sup>Optional</sup> <a name="license_server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.licenseServerSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a>

The settings of the RDS license server to create the endpoint for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#license_server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#license_server_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]

The tags that apply for the license server endpoint. A maximum of 50 tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#tags LicensemanagerusersubscriptionsLicenseServerEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putLicenseServerSettings">put_license_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetLicenseServerSettings">reset_license_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_license_server_settings` <a name="put_license_server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putLicenseServerSettings"></a>

```python
def put_license_server_settings(
  server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings = None,
  server_type: str = None
) -> None
```

###### `server_settings`<sup>Optional</sup> <a name="server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putLicenseServerSettings.parameter.serverSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a>

The settings of a license server, by server type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#server_settings}

---

###### `server_type`<sup>Optional</sup> <a name="server_type" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putLicenseServerSettings.parameter.serverType"></a>

- *Type:* str

The type of license server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_type LicensemanagerusersubscriptionsLicenseServerEndpoint#server_type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LicensemanagerusersubscriptionsLicenseServerEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]

---

##### `reset_license_server_settings` <a name="reset_license_server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetLicenseServerSettings"></a>

```python
def reset_license_server_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LicensemanagerusersubscriptionsLicenseServerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LicensemanagerusersubscriptionsLicenseServerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LicensemanagerusersubscriptionsLicenseServerEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LicensemanagerusersubscriptionsLicenseServerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerusersubscriptionsLicenseServerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointArn">license_server_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointId">license_server_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointProvisioningStatus">license_server_endpoint_provisioning_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServers">license_servers</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettings">license_server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverEndpoint">server_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverType">server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList">LicensemanagerusersubscriptionsLicenseServerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArnInput">identity_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettingsInput">license_server_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArn">identity_provider_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_server_endpoint_arn`<sup>Required</sup> <a name="license_server_endpoint_arn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointArn"></a>

```python
license_server_endpoint_arn: str
```

- *Type:* str

---

##### `license_server_endpoint_id`<sup>Required</sup> <a name="license_server_endpoint_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointId"></a>

```python
license_server_endpoint_id: str
```

- *Type:* str

---

##### `license_server_endpoint_provisioning_status`<sup>Required</sup> <a name="license_server_endpoint_provisioning_status" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointProvisioningStatus"></a>

```python
license_server_endpoint_provisioning_status: str
```

- *Type:* str

---

##### `license_servers`<sup>Required</sup> <a name="license_servers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServers"></a>

```python
license_servers: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList</a>

---

##### `license_server_settings`<sup>Required</sup> <a name="license_server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettings"></a>

```python
license_server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference</a>

---

##### `server_endpoint`<sup>Required</sup> <a name="server_endpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverEndpoint"></a>

```python
server_endpoint: LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference</a>

---

##### `server_type`<sup>Required</sup> <a name="server_type" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tags"></a>

```python
tags: LicensemanagerusersubscriptionsLicenseServerEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList">LicensemanagerusersubscriptionsLicenseServerEndpointTagsList</a>

---

##### `identity_provider_arn_input`<sup>Optional</sup> <a name="identity_provider_arn_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArnInput"></a>

```python
identity_provider_arn_input: str
```

- *Type:* str

---

##### `license_server_settings_input`<sup>Optional</sup> <a name="license_server_settings_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettingsInput"></a>

```python
license_server_settings_input: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LicensemanagerusersubscriptionsLicenseServerEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]

---

##### `identity_provider_arn`<sup>Required</sup> <a name="identity_provider_arn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArn"></a>

```python
identity_provider_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerusersubscriptionsLicenseServerEndpointConfig <a name="LicensemanagerusersubscriptionsLicenseServerEndpointConfig" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_provider_arn: str,
  license_server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings = None,
  tags: IResolvable | typing.List[LicensemanagerusersubscriptionsLicenseServerEndpointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.identityProviderArn">identity_provider_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.licenseServerSettings">license_server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a></code> | The settings of the RDS license server to create the endpoint for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]</code> | The tags that apply for the license server endpoint. A maximum of 50 tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_provider_arn`<sup>Required</sup> <a name="identity_provider_arn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.identityProviderArn"></a>

```python
identity_provider_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for.

For Active Directory, that can be a self-managed Active Directory or an AWS Managed Microsoft AD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#identity_provider_arn LicensemanagerusersubscriptionsLicenseServerEndpoint#identity_provider_arn}

---

##### `license_server_settings`<sup>Optional</sup> <a name="license_server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.licenseServerSettings"></a>

```python
license_server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a>

The settings of the RDS license server to create the endpoint for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#license_server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#license_server_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LicensemanagerusersubscriptionsLicenseServerEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]

The tags that apply for the license server endpoint. A maximum of 50 tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#tags LicensemanagerusersubscriptionsLicenseServerEndpoint#tags}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers()
```


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings(
  server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings = None,
  server_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverSettings">server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a></code> | The settings of a license server, by server type. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverType">server_type</a></code> | <code>str</code> | The type of license server. |

---

##### `server_settings`<sup>Optional</sup> <a name="server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverSettings"></a>

```python
server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a>

The settings of a license server, by server type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#server_settings}

---

##### `server_type`<sup>Optional</sup> <a name="server_type" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

The type of license server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_type LicensemanagerusersubscriptionsLicenseServerEndpoint#server_type}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings(
  rds_sal_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings.property.rdsSalSettings">rds_sal_settings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a></code> | The settings of a Remote Desktop Services Subscriber Access License server. |

---

##### `rds_sal_settings`<sup>Optional</sup> <a name="rds_sal_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings.property.rdsSalSettings"></a>

```python
rds_sal_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a>

The settings of a Remote Desktop Services Subscriber Access License server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_settings}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings(
  rds_sal_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings.property.rdsSalCredentialsProvider">rds_sal_credentials_provider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a></code> | The source of the credentials that License Manager uses to reach the license server. |

---

##### `rds_sal_credentials_provider`<sup>Optional</sup> <a name="rds_sal_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings.property.rdsSalCredentialsProvider"></a>

```python
rds_sal_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a>

The source of the credentials that License Manager uses to reach the license server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_credentials_provider}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider(
  secrets_manager_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider.property.secretsManagerCredentialsProvider">secrets_manager_credentials_provider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a></code> | Credentials held in AWS Secrets Manager. |

---

##### `secrets_manager_credentials_provider`<sup>Optional</sup> <a name="secrets_manager_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider.property.secretsManagerCredentialsProvider"></a>

```python
secrets_manager_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a>

Credentials held in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secrets_manager_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#secrets_manager_credentials_provider}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider(
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider.property.secretId">secret_id</a></code> | <code>str</code> | The identifier of the Secrets Manager secret that holds the license server administrator credentials. |

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The identifier of the Secrets Manager secret that holds the license server administrator credentials.

The name of the secret must begin with the prefix license-manager-user-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secret_id LicensemanagerusersubscriptionsLicenseServerEndpoint#secret_id}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint <a name="LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint()
```


### LicensemanagerusersubscriptionsLicenseServerEndpointTags <a name="LicensemanagerusersubscriptionsLicenseServerEndpointTags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#key LicensemanagerusersubscriptionsLicenseServerEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#value LicensemanagerusersubscriptionsLicenseServerEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.putServerSettings">put_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerSettings">reset_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerType">reset_server_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_settings` <a name="put_server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.putServerSettings"></a>

```python
def put_server_settings(
  rds_sal_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings = None
) -> None
```

###### `rds_sal_settings`<sup>Optional</sup> <a name="rds_sal_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.putServerSettings.parameter.rdsSalSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a>

The settings of a Remote Desktop Services Subscriber Access License server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_settings}

---

##### `reset_server_settings` <a name="reset_server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerSettings"></a>

```python
def reset_server_settings() -> None
```

##### `reset_server_type` <a name="reset_server_type" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerType"></a>

```python
def reset_server_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettings">server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettingsInput">server_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverTypeInput">server_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverType">server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_settings`<sup>Required</sup> <a name="server_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettings"></a>

```python
server_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference</a>

---

##### `server_settings_input`<sup>Optional</sup> <a name="server_settings_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettingsInput"></a>

```python
server_settings_input: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a>

---

##### `server_type_input`<sup>Optional</sup> <a name="server_type_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverTypeInput"></a>

```python
server_type_input: str
```

- *Type:* str

---

##### `server_type`<sup>Required</sup> <a name="server_type" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.putRdsSalSettings">put_rds_sal_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resetRdsSalSettings">reset_rds_sal_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rds_sal_settings` <a name="put_rds_sal_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.putRdsSalSettings"></a>

```python
def put_rds_sal_settings(
  rds_sal_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider = None
) -> None
```

###### `rds_sal_credentials_provider`<sup>Optional</sup> <a name="rds_sal_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.putRdsSalSettings.parameter.rdsSalCredentialsProvider"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a>

The source of the credentials that License Manager uses to reach the license server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_credentials_provider}

---

##### `reset_rds_sal_settings` <a name="reset_rds_sal_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resetRdsSalSettings"></a>

```python
def reset_rds_sal_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettings">rds_sal_settings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettingsInput">rds_sal_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rds_sal_settings`<sup>Required</sup> <a name="rds_sal_settings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettings"></a>

```python
rds_sal_settings: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference</a>

---

##### `rds_sal_settings_input`<sup>Optional</sup> <a name="rds_sal_settings_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettingsInput"></a>

```python
rds_sal_settings_input: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.putRdsSalCredentialsProvider">put_rds_sal_credentials_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resetRdsSalCredentialsProvider">reset_rds_sal_credentials_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rds_sal_credentials_provider` <a name="put_rds_sal_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.putRdsSalCredentialsProvider"></a>

```python
def put_rds_sal_credentials_provider(
  secrets_manager_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider = None
) -> None
```

###### `secrets_manager_credentials_provider`<sup>Optional</sup> <a name="secrets_manager_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.putRdsSalCredentialsProvider.parameter.secretsManagerCredentialsProvider"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a>

Credentials held in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secrets_manager_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#secrets_manager_credentials_provider}

---

##### `reset_rds_sal_credentials_provider` <a name="reset_rds_sal_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resetRdsSalCredentialsProvider"></a>

```python
def reset_rds_sal_credentials_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProvider">rds_sal_credentials_provider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProviderInput">rds_sal_credentials_provider_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rds_sal_credentials_provider`<sup>Required</sup> <a name="rds_sal_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProvider"></a>

```python
rds_sal_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference</a>

---

##### `rds_sal_credentials_provider_input`<sup>Optional</sup> <a name="rds_sal_credentials_provider_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProviderInput"></a>

```python
rds_sal_credentials_provider_input: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.putSecretsManagerCredentialsProvider">put_secrets_manager_credentials_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resetSecretsManagerCredentialsProvider">reset_secrets_manager_credentials_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secrets_manager_credentials_provider` <a name="put_secrets_manager_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.putSecretsManagerCredentialsProvider"></a>

```python
def put_secrets_manager_credentials_provider(
  secret_id: str = None
) -> None
```

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.putSecretsManagerCredentialsProvider.parameter.secretId"></a>

- *Type:* str

The identifier of the Secrets Manager secret that holds the license server administrator credentials.

The name of the secret must begin with the prefix license-manager-user-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secret_id LicensemanagerusersubscriptionsLicenseServerEndpoint#secret_id}

---

##### `reset_secrets_manager_credentials_provider` <a name="reset_secrets_manager_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resetSecretsManagerCredentialsProvider"></a>

```python
def reset_secrets_manager_credentials_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProvider">secrets_manager_credentials_provider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProviderInput">secrets_manager_credentials_provider_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secrets_manager_credentials_provider`<sup>Required</sup> <a name="secrets_manager_credentials_provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProvider"></a>

```python
secrets_manager_credentials_provider: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference</a>

---

##### `secrets_manager_credentials_provider_input`<sup>Optional</sup> <a name="secrets_manager_credentials_provider_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProviderInput"></a>

```python
secrets_manager_credentials_provider_input: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.healthStatus">health_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.provisioningStatus">provisioning_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_status`<sup>Required</sup> <a name="health_status" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.healthStatus"></a>

```python
health_status: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `provisioning_status`<sup>Required</sup> <a name="provisioning_status" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.provisioningStatus"></a>

```python
provisioning_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.internalValue"></a>

```python
internal_value: LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.internalValue"></a>

```python
internal_value: LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointTagsList <a name="LicensemanagerusersubscriptionsLicenseServerEndpointTagsList" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LicensemanagerusersubscriptionsLicenseServerEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>]

---


### LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import licensemanagerusersubscriptions_license_server_endpoint

licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LicensemanagerusersubscriptionsLicenseServerEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags">LicensemanagerusersubscriptionsLicenseServerEndpointTags</a>

---



