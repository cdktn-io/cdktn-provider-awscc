# `ec2VerifiedAccessTrustProvider` Submodule <a name="`ec2VerifiedAccessTrustProvider` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessTrustProvider <a name="Ec2VerifiedAccessTrustProvider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_reference_name: str,
  trust_provider_type: str,
  description: str = None,
  device_options: Ec2VerifiedAccessTrustProviderDeviceOptions = None,
  device_trust_provider_type: str = None,
  native_application_oidc_options: Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions = None,
  oidc_options: Ec2VerifiedAccessTrustProviderOidcOptions = None,
  sse_specification: Ec2VerifiedAccessTrustProviderSseSpecification = None,
  tags: IResolvable | typing.List[Ec2VerifiedAccessTrustProviderTags] = None,
  user_trust_provider_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.policyReferenceName">policy_reference_name</a></code> | <code>str</code> | The identifier to be used when working with policy rules. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.trustProviderType">trust_provider_type</a></code> | <code>str</code> | Type of trust provider. Possible values: user\|device. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the Amazon Web Services Verified Access trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.deviceOptions">device_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | The options for device identity based trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | The type of device-based trust provider. Possible values: jamf\|crowdstrike. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.nativeApplicationOidcOptions">native_application_oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider for L4. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.oidcOptions">oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | The type of device-based trust provider. Possible values: oidc\|iam-identity-center. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy_reference_name`<sup>Required</sup> <a name="policy_reference_name" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.policyReferenceName"></a>

- *Type:* str

The identifier to be used when working with policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#policy_reference_name Ec2VerifiedAccessTrustProvider#policy_reference_name}

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.trustProviderType"></a>

- *Type:* str

Type of trust provider. Possible values: user|device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#trust_provider_type Ec2VerifiedAccessTrustProvider#trust_provider_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.description"></a>

- *Type:* str

A description for the Amazon Web Services Verified Access trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#description Ec2VerifiedAccessTrustProvider#description}

---

##### `device_options`<sup>Optional</sup> <a name="device_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.deviceOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

The options for device identity based trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#device_options Ec2VerifiedAccessTrustProvider#device_options}

---

##### `device_trust_provider_type`<sup>Optional</sup> <a name="device_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.deviceTrustProviderType"></a>

- *Type:* str

The type of device-based trust provider. Possible values: jamf|crowdstrike.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#device_trust_provider_type Ec2VerifiedAccessTrustProvider#device_trust_provider_type}

---

##### `native_application_oidc_options`<sup>Optional</sup> <a name="native_application_oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.nativeApplicationOidcOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider for L4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#native_application_oidc_options Ec2VerifiedAccessTrustProvider#native_application_oidc_options}

---

##### `oidc_options`<sup>Optional</sup> <a name="oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.oidcOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#oidc_options Ec2VerifiedAccessTrustProvider#oidc_options}

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.sseSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#sse_specification Ec2VerifiedAccessTrustProvider#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#tags Ec2VerifiedAccessTrustProvider#tags}

---

##### `user_trust_provider_type`<sup>Optional</sup> <a name="user_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.userTrustProviderType"></a>

- *Type:* str

The type of device-based trust provider. Possible values: oidc|iam-identity-center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_trust_provider_type Ec2VerifiedAccessTrustProvider#user_trust_provider_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions">put_device_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions">put_native_application_oidc_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions">put_oidc_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification">put_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceOptions">reset_device_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceTrustProviderType">reset_device_trust_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetNativeApplicationOidcOptions">reset_native_application_oidc_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOidcOptions">reset_oidc_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetSseSpecification">reset_sse_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetUserTrustProviderType">reset_user_trust_provider_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_device_options` <a name="put_device_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions"></a>

```python
def put_device_options(
  public_signing_key_url: str = None,
  tenant_id: str = None
) -> None
```

###### `public_signing_key_url`<sup>Optional</sup> <a name="public_signing_key_url" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions.parameter.publicSigningKeyUrl"></a>

- *Type:* str

URL Verified Access will use to verify authenticity of the device tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_url Ec2VerifiedAccessTrustProvider#public_signing_key_url}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions.parameter.tenantId"></a>

- *Type:* str

The ID of the tenant application with the device-identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#tenant_id Ec2VerifiedAccessTrustProvider#tenant_id}

---

##### `put_native_application_oidc_options` <a name="put_native_application_oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions"></a>

```python
def put_native_application_oidc_options(
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  public_signing_key_endpoint: str = None,
  scope: str = None,
  token_endpoint: str = None,
  user_info_endpoint: str = None
) -> None
```

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.authorizationEndpoint"></a>

- *Type:* str

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.clientId"></a>

- *Type:* str

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.clientSecret"></a>

- *Type:* str

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.issuer"></a>

- *Type:* str

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

###### `public_signing_key_endpoint`<sup>Optional</sup> <a name="public_signing_key_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.publicSigningKeyEndpoint"></a>

- *Type:* str

The public signing key for endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_endpoint Ec2VerifiedAccessTrustProvider#public_signing_key_endpoint}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.scope"></a>

- *Type:* str

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.tokenEndpoint"></a>

- *Type:* str

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

###### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.userInfoEndpoint"></a>

- *Type:* str

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

##### `put_oidc_options` <a name="put_oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions"></a>

```python
def put_oidc_options(
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  scope: str = None,
  token_endpoint: str = None,
  user_info_endpoint: str = None
) -> None
```

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.authorizationEndpoint"></a>

- *Type:* str

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.clientId"></a>

- *Type:* str

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.clientSecret"></a>

- *Type:* str

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.issuer"></a>

- *Type:* str

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.scope"></a>

- *Type:* str

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.tokenEndpoint"></a>

- *Type:* str

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

###### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.userInfoEndpoint"></a>

- *Type:* str

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

##### `put_sse_specification` <a name="put_sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification"></a>

```python
def put_sse_specification(
  customer_managed_key_enabled: bool | IResolvable = None,
  kms_key_arn: str = None
) -> None
```

###### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification.parameter.customerManagedKeyEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#customer_managed_key_enabled Ec2VerifiedAccessTrustProvider#customer_managed_key_enabled}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification.parameter.kmsKeyArn"></a>

- *Type:* str

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#kms_key_arn Ec2VerifiedAccessTrustProvider#kms_key_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VerifiedAccessTrustProviderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_options` <a name="reset_device_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceOptions"></a>

```python
def reset_device_options() -> None
```

##### `reset_device_trust_provider_type` <a name="reset_device_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceTrustProviderType"></a>

```python
def reset_device_trust_provider_type() -> None
```

##### `reset_native_application_oidc_options` <a name="reset_native_application_oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetNativeApplicationOidcOptions"></a>

```python
def reset_native_application_oidc_options() -> None
```

##### `reset_oidc_options` <a name="reset_oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOidcOptions"></a>

```python
def reset_oidc_options() -> None
```

##### `reset_sse_specification` <a name="reset_sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetSseSpecification"></a>

```python
def reset_sse_specification() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_trust_provider_type` <a name="reset_user_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetUserTrustProviderType"></a>

```python
def reset_user_trust_provider_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VerifiedAccessTrustProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VerifiedAccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptions">device_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference">Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions">native_application_oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptions">oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference">Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList">Ec2VerifiedAccessTrustProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId">verified_access_trust_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptionsInput">device_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderTypeInput">device_trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptionsInput">native_application_oidc_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptionsInput">oidc_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceNameInput">policy_reference_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecificationInput">sse_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderTypeInput">trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderTypeInput">user_trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceName">policy_reference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `device_options`<sup>Required</sup> <a name="device_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptions"></a>

```python
device_options: Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference">Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `native_application_oidc_options`<sup>Required</sup> <a name="native_application_oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions"></a>

```python
native_application_oidc_options: Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a>

---

##### `oidc_options`<sup>Required</sup> <a name="oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptions"></a>

```python
oidc_options: Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference</a>

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecification"></a>

```python
sse_specification: Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference">Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tags"></a>

```python
tags: Ec2VerifiedAccessTrustProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList">Ec2VerifiedAccessTrustProviderTagsList</a>

---

##### `verified_access_trust_provider_id`<sup>Required</sup> <a name="verified_access_trust_provider_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId"></a>

```python
verified_access_trust_provider_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_options_input`<sup>Optional</sup> <a name="device_options_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptionsInput"></a>

```python
device_options_input: IResolvable | Ec2VerifiedAccessTrustProviderDeviceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

---

##### `device_trust_provider_type_input`<sup>Optional</sup> <a name="device_trust_provider_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderTypeInput"></a>

```python
device_trust_provider_type_input: str
```

- *Type:* str

---

##### `native_application_oidc_options_input`<sup>Optional</sup> <a name="native_application_oidc_options_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptionsInput"></a>

```python
native_application_oidc_options_input: IResolvable | Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---

##### `oidc_options_input`<sup>Optional</sup> <a name="oidc_options_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptionsInput"></a>

```python
oidc_options_input: IResolvable | Ec2VerifiedAccessTrustProviderOidcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

---

##### `policy_reference_name_input`<sup>Optional</sup> <a name="policy_reference_name_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceNameInput"></a>

```python
policy_reference_name_input: str
```

- *Type:* str

---

##### `sse_specification_input`<sup>Optional</sup> <a name="sse_specification_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecificationInput"></a>

```python
sse_specification_input: IResolvable | Ec2VerifiedAccessTrustProviderSseSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VerifiedAccessTrustProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]

---

##### `trust_provider_type_input`<sup>Optional</sup> <a name="trust_provider_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderTypeInput"></a>

```python
trust_provider_type_input: str
```

- *Type:* str

---

##### `user_trust_provider_type_input`<sup>Optional</sup> <a name="user_trust_provider_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderTypeInput"></a>

```python
user_trust_provider_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_trust_provider_type`<sup>Required</sup> <a name="device_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

---

##### `policy_reference_name`<sup>Required</sup> <a name="policy_reference_name" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceName"></a>

```python
policy_reference_name: str
```

- *Type:* str

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `user_trust_provider_type`<sup>Required</sup> <a name="user_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessTrustProviderConfig <a name="Ec2VerifiedAccessTrustProviderConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_reference_name: str,
  trust_provider_type: str,
  description: str = None,
  device_options: Ec2VerifiedAccessTrustProviderDeviceOptions = None,
  device_trust_provider_type: str = None,
  native_application_oidc_options: Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions = None,
  oidc_options: Ec2VerifiedAccessTrustProviderOidcOptions = None,
  sse_specification: Ec2VerifiedAccessTrustProviderSseSpecification = None,
  tags: IResolvable | typing.List[Ec2VerifiedAccessTrustProviderTags] = None,
  user_trust_provider_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.policyReferenceName">policy_reference_name</a></code> | <code>str</code> | The identifier to be used when working with policy rules. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | Type of trust provider. Possible values: user\|device. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.description">description</a></code> | <code>str</code> | A description for the Amazon Web Services Verified Access trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceOptions">device_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | The options for device identity based trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | The type of device-based trust provider. Possible values: jamf\|crowdstrike. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.nativeApplicationOidcOptions">native_application_oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider for L4. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.oidcOptions">oidc_options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | The type of device-based trust provider. Possible values: oidc\|iam-identity-center. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy_reference_name`<sup>Required</sup> <a name="policy_reference_name" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.policyReferenceName"></a>

```python
policy_reference_name: str
```

- *Type:* str

The identifier to be used when working with policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#policy_reference_name Ec2VerifiedAccessTrustProvider#policy_reference_name}

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

Type of trust provider. Possible values: user|device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#trust_provider_type Ec2VerifiedAccessTrustProvider#trust_provider_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the Amazon Web Services Verified Access trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#description Ec2VerifiedAccessTrustProvider#description}

---

##### `device_options`<sup>Optional</sup> <a name="device_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceOptions"></a>

```python
device_options: Ec2VerifiedAccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

The options for device identity based trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#device_options Ec2VerifiedAccessTrustProvider#device_options}

---

##### `device_trust_provider_type`<sup>Optional</sup> <a name="device_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

The type of device-based trust provider. Possible values: jamf|crowdstrike.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#device_trust_provider_type Ec2VerifiedAccessTrustProvider#device_trust_provider_type}

---

##### `native_application_oidc_options`<sup>Optional</sup> <a name="native_application_oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.nativeApplicationOidcOptions"></a>

```python
native_application_oidc_options: Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider for L4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#native_application_oidc_options Ec2VerifiedAccessTrustProvider#native_application_oidc_options}

---

##### `oidc_options`<sup>Optional</sup> <a name="oidc_options" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.oidcOptions"></a>

```python
oidc_options: Ec2VerifiedAccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#oidc_options Ec2VerifiedAccessTrustProvider#oidc_options}

---

##### `sse_specification`<sup>Optional</sup> <a name="sse_specification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.sseSpecification"></a>

```python
sse_specification: Ec2VerifiedAccessTrustProviderSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#sse_specification Ec2VerifiedAccessTrustProvider#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VerifiedAccessTrustProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#tags Ec2VerifiedAccessTrustProvider#tags}

---

##### `user_trust_provider_type`<sup>Optional</sup> <a name="user_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

The type of device-based trust provider. Possible values: oidc|iam-identity-center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_trust_provider_type Ec2VerifiedAccessTrustProvider#user_trust_provider_type}

---

### Ec2VerifiedAccessTrustProviderDeviceOptions <a name="Ec2VerifiedAccessTrustProviderDeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions(
  public_signing_key_url: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.publicSigningKeyUrl">public_signing_key_url</a></code> | <code>str</code> | URL Verified Access will use to verify authenticity of the device tokens. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.tenantId">tenant_id</a></code> | <code>str</code> | The ID of the tenant application with the device-identity provider. |

---

##### `public_signing_key_url`<sup>Optional</sup> <a name="public_signing_key_url" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.publicSigningKeyUrl"></a>

```python
public_signing_key_url: str
```

- *Type:* str

URL Verified Access will use to verify authenticity of the device tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_url Ec2VerifiedAccessTrustProvider#public_signing_key_url}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The ID of the tenant application with the device-identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#tenant_id Ec2VerifiedAccessTrustProvider#tenant_id}

---

### Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions <a name="Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions(
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  public_signing_key_endpoint: str = None,
  scope: str = None,
  token_endpoint: str = None,
  user_info_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | The OIDC authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientId">client_id</a></code> | <code>str</code> | The client identifier. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.issuer">issuer</a></code> | <code>str</code> | The OIDC issuer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.publicSigningKeyEndpoint">public_signing_key_endpoint</a></code> | <code>str</code> | The public signing key for endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.scope">scope</a></code> | <code>str</code> | OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The OIDC token endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | The OIDC user info endpoint. |

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

##### `public_signing_key_endpoint`<sup>Optional</sup> <a name="public_signing_key_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.publicSigningKeyEndpoint"></a>

```python
public_signing_key_endpoint: str
```

- *Type:* str

The public signing key for endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_endpoint Ec2VerifiedAccessTrustProvider#public_signing_key_endpoint}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.scope"></a>

```python
scope: str
```

- *Type:* str

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

##### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

### Ec2VerifiedAccessTrustProviderOidcOptions <a name="Ec2VerifiedAccessTrustProviderOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions(
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  scope: str = None,
  token_endpoint: str = None,
  user_info_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | The OIDC authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientId">client_id</a></code> | <code>str</code> | The client identifier. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.issuer">issuer</a></code> | <code>str</code> | The OIDC issuer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.scope">scope</a></code> | <code>str</code> | OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The OIDC token endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | The OIDC user info endpoint. |

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.scope"></a>

```python
scope: str
```

- *Type:* str

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

##### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

### Ec2VerifiedAccessTrustProviderSseSpecification <a name="Ec2VerifiedAccessTrustProviderSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification(
  customer_managed_key_enabled: bool | IResolvable = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `customer_managed_key_enabled`<sup>Optional</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#customer_managed_key_enabled Ec2VerifiedAccessTrustProvider#customer_managed_key_enabled}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#kms_key_arn Ec2VerifiedAccessTrustProvider#kms_key_arn}

---

### Ec2VerifiedAccessTrustProviderTags <a name="Ec2VerifiedAccessTrustProviderTags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#key Ec2VerifiedAccessTrustProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_trust_provider#value Ec2VerifiedAccessTrustProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetPublicSigningKeyUrl">reset_public_signing_key_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_public_signing_key_url` <a name="reset_public_signing_key_url" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetPublicSigningKeyUrl"></a>

```python
def reset_public_signing_key_url() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrlInput">public_signing_key_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl">public_signing_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_signing_key_url_input`<sup>Optional</sup> <a name="public_signing_key_url_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrlInput"></a>

```python
public_signing_key_url_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `public_signing_key_url`<sup>Required</sup> <a name="public_signing_key_url" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl"></a>

```python
public_signing_key_url: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessTrustProviderDeviceOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

---


### Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetPublicSigningKeyEndpoint">reset_public_signing_key_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetUserInfoEndpoint">reset_user_info_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_public_signing_key_endpoint` <a name="reset_public_signing_key_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetPublicSigningKeyEndpoint"></a>

```python
def reset_public_signing_key_endpoint() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```

##### `reset_user_info_endpoint` <a name="reset_user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```python
def reset_user_info_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpointInput">public_signing_key_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpointInput">user_info_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint">public_signing_key_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `public_signing_key_endpoint_input`<sup>Optional</sup> <a name="public_signing_key_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpointInput"></a>

```python
public_signing_key_endpoint_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `user_info_endpoint_input`<sup>Optional</sup> <a name="user_info_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```python
user_info_endpoint_input: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `public_signing_key_endpoint`<sup>Required</sup> <a name="public_signing_key_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint"></a>

```python
public_signing_key_endpoint: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---


### Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint">reset_user_info_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```

##### `reset_user_info_endpoint` <a name="reset_user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```python
def reset_user_info_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput">user_info_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `user_info_endpoint_input`<sup>Optional</sup> <a name="user_info_endpoint_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```python
user_info_endpoint_input: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessTrustProviderOidcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

---


### Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference <a name="Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">reset_customer_managed_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_customer_managed_key_enabled` <a name="reset_customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```python
def reset_customer_managed_key_enabled() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">customer_managed_key_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled">customer_managed_key_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_managed_key_enabled_input`<sup>Optional</sup> <a name="customer_managed_key_enabled_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```python
customer_managed_key_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `customer_managed_key_enabled`<sup>Required</sup> <a name="customer_managed_key_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```python
customer_managed_key_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessTrustProviderSseSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

---


### Ec2VerifiedAccessTrustProviderTagsList <a name="Ec2VerifiedAccessTrustProviderTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VerifiedAccessTrustProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VerifiedAccessTrustProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>]

---


### Ec2VerifiedAccessTrustProviderTagsOutputReference <a name="Ec2VerifiedAccessTrustProviderTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_trust_provider

ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessTrustProviderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags">Ec2VerifiedAccessTrustProviderTags</a>

---



