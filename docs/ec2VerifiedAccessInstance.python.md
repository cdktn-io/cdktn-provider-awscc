# `ec2VerifiedAccessInstance` Submodule <a name="`ec2VerifiedAccessInstance` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessInstance <a name="Ec2VerifiedAccessInstance" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance awscc_ec2_verified_access_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cidr_endpoints_custom_sub_domain: str = None,
  description: str = None,
  fips_enabled: bool | IResolvable = None,
  logging_configurations: Ec2VerifiedAccessInstanceLoggingConfigurations = None,
  tags: IResolvable | typing.List[Ec2VerifiedAccessInstanceTags] = None,
  verified_access_trust_provider_ids: typing.List[str] = None,
  verified_access_trust_providers: IResolvable | typing.List[Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.cidrEndpointsCustomSubDomain">cidr_endpoints_custom_sub_domain</a></code> | <code>str</code> | Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.fipsEnabled">fips_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether FIPS is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.loggingConfigurations">logging_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | The configuration options for AWS Verified Access instances. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviderIds">verified_access_trust_provider_ids</a></code> | <code>typing.List[str]</code> | The IDs of the AWS Verified Access trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviders">verified_access_trust_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]</code> | AWS Verified Access trust providers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr_endpoints_custom_sub_domain`<sup>Optional</sup> <a name="cidr_endpoints_custom_sub_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.cidrEndpointsCustomSubDomain"></a>

- *Type:* str

Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#cidr_endpoints_custom_sub_domain Ec2VerifiedAccessInstance#cidr_endpoints_custom_sub_domain}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.description"></a>

- *Type:* str

A description for the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.fipsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether FIPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#fips_enabled Ec2VerifiedAccessInstance#fips_enabled}

---

##### `logging_configurations`<sup>Optional</sup> <a name="logging_configurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.loggingConfigurations"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

The configuration options for AWS Verified Access instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#logging_configurations Ec2VerifiedAccessInstance#logging_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#tags Ec2VerifiedAccessInstance#tags}

---

##### `verified_access_trust_provider_ids`<sup>Optional</sup> <a name="verified_access_trust_provider_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviderIds"></a>

- *Type:* typing.List[str]

The IDs of the AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_ids Ec2VerifiedAccessInstance#verified_access_trust_provider_ids}

---

##### `verified_access_trust_providers`<sup>Optional</sup> <a name="verified_access_trust_providers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.verifiedAccessTrustProviders"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]

AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_providers Ec2VerifiedAccessInstance#verified_access_trust_providers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations">put_logging_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders">put_verified_access_trust_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain">reset_cidr_endpoints_custom_sub_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled">reset_fips_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations">reset_logging_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds">reset_verified_access_trust_provider_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders">reset_verified_access_trust_providers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_configurations` <a name="put_logging_configurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations"></a>

```python
def put_logging_configurations(
  cloudwatch_logs: Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs = None,
  include_trust_context: bool | IResolvable = None,
  kinesis_data_firehose: Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose = None,
  log_version: str = None,
  s3: Ec2VerifiedAccessInstanceLoggingConfigurationsS3 = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

Sends Verified Access logs to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#cloudwatch_logs Ec2VerifiedAccessInstance#cloudwatch_logs}

---

###### `include_trust_context`<sup>Optional</sup> <a name="include_trust_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.includeTrustContext"></a>

- *Type:* bool | cdktn.IResolvable

Include claims from trust providers in Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#include_trust_context Ec2VerifiedAccessInstance#include_trust_context}

---

###### `kinesis_data_firehose`<sup>Optional</sup> <a name="kinesis_data_firehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.kinesisDataFirehose"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

Sends Verified Access logs to Kinesis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#kinesis_data_firehose Ec2VerifiedAccessInstance#kinesis_data_firehose}

---

###### `log_version`<sup>Optional</sup> <a name="log_version" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.logVersion"></a>

- *Type:* str

Select log version for Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#log_version Ec2VerifiedAccessInstance#log_version}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

Sends Verified Access logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#s3 Ec2VerifiedAccessInstance#s3}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VerifiedAccessInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]

---

##### `put_verified_access_trust_providers` <a name="put_verified_access_trust_providers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders"></a>

```python
def put_verified_access_trust_providers(
  value: IResolvable | typing.List[Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]

---

##### `reset_cidr_endpoints_custom_sub_domain` <a name="reset_cidr_endpoints_custom_sub_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain"></a>

```python
def reset_cidr_endpoints_custom_sub_domain() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fips_enabled` <a name="reset_fips_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled"></a>

```python
def reset_fips_enabled() -> None
```

##### `reset_logging_configurations` <a name="reset_logging_configurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations"></a>

```python
def reset_logging_configurations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_verified_access_trust_provider_ids` <a name="reset_verified_access_trust_provider_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds"></a>

```python
def reset_verified_access_trust_provider_ids() -> None
```

##### `reset_verified_access_trust_providers` <a name="reset_verified_access_trust_providers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders"></a>

```python
def reset_verified_access_trust_providers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VerifiedAccessInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VerifiedAccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers">cidr_endpoints_custom_sub_domain_name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations">logging_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId">verified_access_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders">verified_access_trust_providers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput">cidr_endpoints_custom_sub_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput">fips_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput">logging_configurations_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput">verified_access_trust_provider_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput">verified_access_trust_providers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain">cidr_endpoints_custom_sub_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled">fips_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds">verified_access_trust_provider_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr_endpoints_custom_sub_domain_name_servers`<sup>Required</sup> <a name="cidr_endpoints_custom_sub_domain_name_servers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers"></a>

```python
cidr_endpoints_custom_sub_domain_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `logging_configurations`<sup>Required</sup> <a name="logging_configurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations"></a>

```python
logging_configurations: Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags"></a>

```python
tags: Ec2VerifiedAccessInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a>

---

##### `verified_access_instance_id`<sup>Required</sup> <a name="verified_access_instance_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId"></a>

```python
verified_access_instance_id: str
```

- *Type:* str

---

##### `verified_access_trust_providers`<sup>Required</sup> <a name="verified_access_trust_providers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders"></a>

```python
verified_access_trust_providers: Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `cidr_endpoints_custom_sub_domain_input`<sup>Optional</sup> <a name="cidr_endpoints_custom_sub_domain_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput"></a>

```python
cidr_endpoints_custom_sub_domain_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fips_enabled_input`<sup>Optional</sup> <a name="fips_enabled_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput"></a>

```python
fips_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logging_configurations_input`<sup>Optional</sup> <a name="logging_configurations_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput"></a>

```python
logging_configurations_input: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VerifiedAccessInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]

---

##### `verified_access_trust_provider_ids_input`<sup>Optional</sup> <a name="verified_access_trust_provider_ids_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput"></a>

```python
verified_access_trust_provider_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verified_access_trust_providers_input`<sup>Optional</sup> <a name="verified_access_trust_providers_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput"></a>

```python
verified_access_trust_providers_input: IResolvable | typing.List[Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]

---

##### `cidr_endpoints_custom_sub_domain`<sup>Required</sup> <a name="cidr_endpoints_custom_sub_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain"></a>

```python
cidr_endpoints_custom_sub_domain: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fips_enabled`<sup>Required</sup> <a name="fips_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled"></a>

```python
fips_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `verified_access_trust_provider_ids`<sup>Required</sup> <a name="verified_access_trust_provider_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds"></a>

```python
verified_access_trust_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessInstanceConfig <a name="Ec2VerifiedAccessInstanceConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cidr_endpoints_custom_sub_domain: str = None,
  description: str = None,
  fips_enabled: bool | IResolvable = None,
  logging_configurations: Ec2VerifiedAccessInstanceLoggingConfigurations = None,
  tags: IResolvable | typing.List[Ec2VerifiedAccessInstanceTags] = None,
  verified_access_trust_provider_ids: typing.List[str] = None,
  verified_access_trust_providers: IResolvable | typing.List[Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain">cidr_endpoints_custom_sub_domain</a></code> | <code>str</code> | Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description">description</a></code> | <code>str</code> | A description for the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled">fips_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether FIPS is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations">logging_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | The configuration options for AWS Verified Access instances. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds">verified_access_trust_provider_ids</a></code> | <code>typing.List[str]</code> | The IDs of the AWS Verified Access trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders">verified_access_trust_providers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]</code> | AWS Verified Access trust providers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr_endpoints_custom_sub_domain`<sup>Optional</sup> <a name="cidr_endpoints_custom_sub_domain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain"></a>

```python
cidr_endpoints_custom_sub_domain: str
```

- *Type:* str

Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#cidr_endpoints_custom_sub_domain Ec2VerifiedAccessInstance#cidr_endpoints_custom_sub_domain}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled"></a>

```python
fips_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether FIPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#fips_enabled Ec2VerifiedAccessInstance#fips_enabled}

---

##### `logging_configurations`<sup>Optional</sup> <a name="logging_configurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations"></a>

```python
logging_configurations: Ec2VerifiedAccessInstanceLoggingConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

The configuration options for AWS Verified Access instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#logging_configurations Ec2VerifiedAccessInstance#logging_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VerifiedAccessInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#tags Ec2VerifiedAccessInstance#tags}

---

##### `verified_access_trust_provider_ids`<sup>Optional</sup> <a name="verified_access_trust_provider_ids" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds"></a>

```python
verified_access_trust_provider_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_ids Ec2VerifiedAccessInstance#verified_access_trust_provider_ids}

---

##### `verified_access_trust_providers`<sup>Optional</sup> <a name="verified_access_trust_providers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders"></a>

```python
verified_access_trust_providers: IResolvable | typing.List[Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]

AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_providers Ec2VerifiedAccessInstance#verified_access_trust_providers}

---

### Ec2VerifiedAccessInstanceLoggingConfigurations <a name="Ec2VerifiedAccessInstanceLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations(
  cloudwatch_logs: Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs = None,
  include_trust_context: bool | IResolvable = None,
  kinesis_data_firehose: Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose = None,
  log_version: str = None,
  s3: Ec2VerifiedAccessInstanceLoggingConfigurationsS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | Sends Verified Access logs to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext">include_trust_context</a></code> | <code>bool \| cdktn.IResolvable</code> | Include claims from trust providers in Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose">kinesis_data_firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | Sends Verified Access logs to Kinesis. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion">log_version</a></code> | <code>str</code> | Select log version for Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | Sends Verified Access logs to Amazon S3. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

Sends Verified Access logs to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#cloudwatch_logs Ec2VerifiedAccessInstance#cloudwatch_logs}

---

##### `include_trust_context`<sup>Optional</sup> <a name="include_trust_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext"></a>

```python
include_trust_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Include claims from trust providers in Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#include_trust_context Ec2VerifiedAccessInstance#include_trust_context}

---

##### `kinesis_data_firehose`<sup>Optional</sup> <a name="kinesis_data_firehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose"></a>

```python
kinesis_data_firehose: Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

Sends Verified Access logs to Kinesis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#kinesis_data_firehose Ec2VerifiedAccessInstance#kinesis_data_firehose}

---

##### `log_version`<sup>Optional</sup> <a name="log_version" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion"></a>

```python
log_version: str
```

- *Type:* str

Select log version for Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#log_version Ec2VerifiedAccessInstance#log_version}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3"></a>

```python
s3: Ec2VerifiedAccessInstanceLoggingConfigurationsS3
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

Sends Verified Access logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#s3 Ec2VerifiedAccessInstance#s3}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs(
  enabled: bool | IResolvable = None,
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup">log_group</a></code> | <code>str</code> | The ID of the CloudWatch Logs log group. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The ID of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#log_group Ec2VerifiedAccessInstance#log_group}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose(
  delivery_stream: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | The ID of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether logging is enabled. |

---

##### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

The ID of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#delivery_stream Ec2VerifiedAccessInstance#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsS3 <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3(
  bucket_name: str = None,
  bucket_owner: str = None,
  enabled: bool | IResolvable = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName">bucket_name</a></code> | <code>str</code> | The bucket name. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | The ID of the AWS account that owns the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix">prefix</a></code> | <code>str</code> | The bucket prefix. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#bucket_name Ec2VerifiedAccessInstance#bucket_name}

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

The ID of the AWS account that owns the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#bucket_owner Ec2VerifiedAccessInstance#bucket_owner}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The bucket prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#prefix Ec2VerifiedAccessInstance#prefix}

---

### Ec2VerifiedAccessInstanceTags <a name="Ec2VerifiedAccessInstanceTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#key Ec2VerifiedAccessInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#value Ec2VerifiedAccessInstance#value}

---

### Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders(
  description: str = None,
  device_trust_provider_type: str = None,
  trust_provider_type: str = None,
  user_trust_provider_type: str = None,
  verified_access_trust_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description">description</a></code> | <code>str</code> | The description of trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | The type of device-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | The type of trust provider (user- or device-based). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | The type of user-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId">verified_access_trust_provider_id</a></code> | <code>str</code> | The ID of the trust provider. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description"></a>

```python
description: str
```

- *Type:* str

The description of trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `device_trust_provider_type`<sup>Optional</sup> <a name="device_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

The type of device-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#device_trust_provider_type Ec2VerifiedAccessInstance#device_trust_provider_type}

---

##### `trust_provider_type`<sup>Optional</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

The type of trust provider (user- or device-based).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#trust_provider_type Ec2VerifiedAccessInstance#trust_provider_type}

---

##### `user_trust_provider_type`<sup>Optional</sup> <a name="user_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

The type of user-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#user_trust_provider_type Ec2VerifiedAccessInstance#user_trust_provider_type}

---

##### `verified_access_trust_provider_id`<sup>Optional</sup> <a name="verified_access_trust_provider_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId"></a>

```python
verified_access_trust_provider_id: str
```

- *Type:* str

The ID of the trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_id Ec2VerifiedAccessInstance#verified_access_trust_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream">reset_delivery_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream` <a name="reset_delivery_stream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream"></a>

```python
def reset_delivery_stream() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput">delivery_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_input`<sup>Optional</sup> <a name="delivery_stream_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput"></a>

```python
delivery_stream_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose">put_kinesis_data_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext">reset_include_trust_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose">reset_kinesis_data_firehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion">reset_log_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  enabled: bool | IResolvable = None,
  log_group: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs.parameter.logGroup"></a>

- *Type:* str

The ID of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#log_group Ec2VerifiedAccessInstance#log_group}

---

##### `put_kinesis_data_firehose` <a name="put_kinesis_data_firehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose"></a>

```python
def put_kinesis_data_firehose(
  delivery_stream: str = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose.parameter.deliveryStream"></a>

- *Type:* str

The ID of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#delivery_stream Ec2VerifiedAccessInstance#delivery_stream}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3"></a>

```python
def put_s3(
  bucket_name: str = None,
  bucket_owner: str = None,
  enabled: bool | IResolvable = None,
  prefix: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3.parameter.bucketName"></a>

- *Type:* str

The bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#bucket_name Ec2VerifiedAccessInstance#bucket_name}

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3.parameter.bucketOwner"></a>

- *Type:* str

The ID of the AWS account that owns the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#bucket_owner Ec2VerifiedAccessInstance#bucket_owner}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

The bucket prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#prefix Ec2VerifiedAccessInstance#prefix}

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_include_trust_context` <a name="reset_include_trust_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext"></a>

```python
def reset_include_trust_context() -> None
```

##### `reset_kinesis_data_firehose` <a name="reset_kinesis_data_firehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose"></a>

```python
def reset_kinesis_data_firehose() -> None
```

##### `reset_log_version` <a name="reset_log_version" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion"></a>

```python
def reset_log_version() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose">kinesis_data_firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput">include_trust_context_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput">kinesis_data_firehose_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput">log_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext">include_trust_context</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion">log_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a>

---

##### `kinesis_data_firehose`<sup>Required</sup> <a name="kinesis_data_firehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose"></a>

```python
kinesis_data_firehose: Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3"></a>

```python
s3: Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---

##### `include_trust_context_input`<sup>Optional</sup> <a name="include_trust_context_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput"></a>

```python
include_trust_context_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kinesis_data_firehose_input`<sup>Optional</sup> <a name="kinesis_data_firehose_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput"></a>

```python
kinesis_data_firehose_input: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---

##### `log_version_input`<sup>Optional</sup> <a name="log_version_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput"></a>

```python
log_version_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---

##### `include_trust_context`<sup>Required</sup> <a name="include_trust_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext"></a>

```python
include_trust_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_version`<sup>Required</sup> <a name="log_version" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion"></a>

```python
log_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessInstanceLoggingConfigurationsS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---


### Ec2VerifiedAccessInstanceTagsList <a name="Ec2VerifiedAccessInstanceTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VerifiedAccessInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VerifiedAccessInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>]

---


### Ec2VerifiedAccessInstanceTagsOutputReference <a name="Ec2VerifiedAccessInstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>]

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_verified_access_instance

ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType">reset_device_trust_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType">reset_trust_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType">reset_user_trust_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId">reset_verified_access_trust_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_trust_provider_type` <a name="reset_device_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType"></a>

```python
def reset_device_trust_provider_type() -> None
```

##### `reset_trust_provider_type` <a name="reset_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType"></a>

```python
def reset_trust_provider_type() -> None
```

##### `reset_user_trust_provider_type` <a name="reset_user_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType"></a>

```python
def reset_user_trust_provider_type() -> None
```

##### `reset_verified_access_trust_provider_id` <a name="reset_verified_access_trust_provider_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId"></a>

```python
def reset_verified_access_trust_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput">device_trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput">trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput">user_trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput">verified_access_trust_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">verified_access_trust_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_trust_provider_type_input`<sup>Optional</sup> <a name="device_trust_provider_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput"></a>

```python
device_trust_provider_type_input: str
```

- *Type:* str

---

##### `trust_provider_type_input`<sup>Optional</sup> <a name="trust_provider_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput"></a>

```python
trust_provider_type_input: str
```

- *Type:* str

---

##### `user_trust_provider_type_input`<sup>Optional</sup> <a name="user_trust_provider_type_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput"></a>

```python
user_trust_provider_type_input: str
```

- *Type:* str

---

##### `verified_access_trust_provider_id_input`<sup>Optional</sup> <a name="verified_access_trust_provider_id_input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput"></a>

```python
verified_access_trust_provider_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_trust_provider_type`<sup>Required</sup> <a name="device_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `user_trust_provider_type`<sup>Required</sup> <a name="user_trust_provider_type" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

---

##### `verified_access_trust_provider_id`<sup>Required</sup> <a name="verified_access_trust_provider_id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```python
verified_access_trust_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>

---



