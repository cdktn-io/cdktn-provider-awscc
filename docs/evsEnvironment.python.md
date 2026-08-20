# `evsEnvironment` Submodule <a name="`evsEnvironment` Submodule" id="@cdktn/provider-awscc.evsEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvsEnvironment <a name="EvsEnvironment" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment awscc_evs_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_access_subnet_id: str,
  terms_accepted: bool | IResolvable,
  vcf_version: str,
  vpc_id: str,
  connectivity_info: EvsEnvironmentConnectivityInfo = None,
  environment_name: str = None,
  hosts: IResolvable | typing.List[EvsEnvironmentHosts] = None,
  initial_vlans: EvsEnvironmentInitialVlans = None,
  kms_key_id: str = None,
  license_info: EvsEnvironmentLicenseInfo = None,
  service_access_security_groups: EvsEnvironmentServiceAccessSecurityGroups = None,
  site_id: str = None,
  tags: IResolvable | typing.List[EvsEnvironmentTags] = None,
  vcf_hostnames: EvsEnvironmentVcfHostnames = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSubnetId">service_access_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.termsAccepted">terms_accepted</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfVersion">vcf_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connectivityInfo">connectivity_info</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.environmentName">environment_name</a></code> | <code>str</code> | The name of an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.hosts">hosts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]</code> | The initial hosts for environment only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.initialVlans">initial_vlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | The initial Vlan configuration only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.licenseInfo">license_info</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | The license information for an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSecurityGroups">service_access_security_groups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfHostnames">vcf_hostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_access_subnet_id`<sup>Required</sup> <a name="service_access_subnet_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}.

---

##### `terms_accepted`<sup>Required</sup> <a name="terms_accepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.termsAccepted"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}.

---

##### `vcf_version`<sup>Required</sup> <a name="vcf_version" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}.

---

##### `connectivity_info`<sup>Optional</sup> <a name="connectivity_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connectivityInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}.

---

##### `environment_name`<sup>Optional</sup> <a name="environment_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.environmentName"></a>

- *Type:* str

The name of an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#environment_name EvsEnvironment#environment_name}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.hosts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]

The initial hosts for environment only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hosts EvsEnvironment#hosts}

---

##### `initial_vlans`<sup>Optional</sup> <a name="initial_vlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.initialVlans"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

The initial Vlan configuration only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#initial_vlans EvsEnvironment#initial_vlans}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}.

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.licenseInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

The license information for an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#license_info EvsEnvironment#license_info}

---

##### `service_access_security_groups`<sup>Optional</sup> <a name="service_access_security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSecurityGroups"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}.

---

##### `site_id`<sup>Optional</sup> <a name="site_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.siteId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#tags EvsEnvironment#tags}

---

##### `vcf_hostnames`<sup>Optional</sup> <a name="vcf_hostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfHostnames"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo">put_connectivity_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts">put_hosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans">put_initial_vlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo">put_license_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups">put_service_access_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames">put_vcf_hostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo">reset_connectivity_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName">reset_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans">reset_initial_vlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo">reset_license_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups">reset_service_access_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId">reset_site_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames">reset_vcf_hostnames</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connectivity_info` <a name="put_connectivity_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo"></a>

```python
def put_connectivity_info(
  private_route_server_peerings: typing.List[str] = None
) -> None
```

###### `private_route_server_peerings`<sup>Optional</sup> <a name="private_route_server_peerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo.parameter.privateRouteServerPeerings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}.

---

##### `put_hosts` <a name="put_hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts"></a>

```python
def put_hosts(
  value: IResolvable | typing.List[EvsEnvironmentHosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]

---

##### `put_initial_vlans` <a name="put_initial_vlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans"></a>

```python
def put_initial_vlans(
  edge_v_tep: EvsEnvironmentInitialVlansEdgeVTep = None,
  expansion_vlan1: EvsEnvironmentInitialVlansExpansionVlan1 = None,
  expansion_vlan2: EvsEnvironmentInitialVlansExpansionVlan2 = None,
  hcx: EvsEnvironmentInitialVlansHcx = None,
  hcx_network_acl_id: str = None,
  is_hcx_public: bool | IResolvable = None,
  nsx_up_link: EvsEnvironmentInitialVlansNsxUpLink = None,
  vmk_management: EvsEnvironmentInitialVlansVmkManagement = None,
  vm_management: EvsEnvironmentInitialVlansVmManagement = None,
  v_motion: EvsEnvironmentInitialVlansVMotion = None,
  v_san: EvsEnvironmentInitialVlansVSan = None,
  v_tep: EvsEnvironmentInitialVlansVTep = None
) -> None
```

###### `edge_v_tep`<sup>Optional</sup> <a name="edge_v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.edgeVTep"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}.

---

###### `expansion_vlan1`<sup>Optional</sup> <a name="expansion_vlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.expansionVlan1"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}.

---

###### `expansion_vlan2`<sup>Optional</sup> <a name="expansion_vlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.expansionVlan2"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}.

---

###### `hcx`<sup>Optional</sup> <a name="hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.hcx"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}.

---

###### `hcx_network_acl_id`<sup>Optional</sup> <a name="hcx_network_acl_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.hcxNetworkAclId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}.

---

###### `is_hcx_public`<sup>Optional</sup> <a name="is_hcx_public" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.isHcxPublic"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}.

---

###### `nsx_up_link`<sup>Optional</sup> <a name="nsx_up_link" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.nsxUpLink"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}.

---

###### `vmk_management`<sup>Optional</sup> <a name="vmk_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.vmkManagement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}.

---

###### `vm_management`<sup>Optional</sup> <a name="vm_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.vmManagement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}.

---

###### `v_motion`<sup>Optional</sup> <a name="v_motion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.vMotion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}.

---

###### `v_san`<sup>Optional</sup> <a name="v_san" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.vSan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}.

---

###### `v_tep`<sup>Optional</sup> <a name="v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.vTep"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}.

---

##### `put_license_info` <a name="put_license_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo"></a>

```python
def put_license_info(
  solution_key: str = None,
  vsan_key: str = None
) -> None
```

###### `solution_key`<sup>Optional</sup> <a name="solution_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo.parameter.solutionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}.

---

###### `vsan_key`<sup>Optional</sup> <a name="vsan_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo.parameter.vsanKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}.

---

##### `put_service_access_security_groups` <a name="put_service_access_security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups"></a>

```python
def put_service_access_security_groups(
  security_groups: typing.List[str] = None
) -> None
```

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EvsEnvironmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]

---

##### `put_vcf_hostnames` <a name="put_vcf_hostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames"></a>

```python
def put_vcf_hostnames(
  cloud_builder: str = None,
  nsx: str = None,
  nsx_edge1: str = None,
  nsx_edge2: str = None,
  nsx_manager1: str = None,
  nsx_manager2: str = None,
  nsx_manager3: str = None,
  sddc_manager: str = None,
  v_center: str = None
) -> None
```

###### `cloud_builder`<sup>Optional</sup> <a name="cloud_builder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.cloudBuilder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}.

---

###### `nsx`<sup>Optional</sup> <a name="nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.nsx"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}.

---

###### `nsx_edge1`<sup>Optional</sup> <a name="nsx_edge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.nsxEdge1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}.

---

###### `nsx_edge2`<sup>Optional</sup> <a name="nsx_edge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.nsxEdge2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}.

---

###### `nsx_manager1`<sup>Optional</sup> <a name="nsx_manager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.nsxManager1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}.

---

###### `nsx_manager2`<sup>Optional</sup> <a name="nsx_manager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.nsxManager2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}.

---

###### `nsx_manager3`<sup>Optional</sup> <a name="nsx_manager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.nsxManager3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}.

---

###### `sddc_manager`<sup>Optional</sup> <a name="sddc_manager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.sddcManager"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}.

---

###### `v_center`<sup>Optional</sup> <a name="v_center" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.vCenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}.

---

##### `reset_connectivity_info` <a name="reset_connectivity_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo"></a>

```python
def reset_connectivity_info() -> None
```

##### `reset_environment_name` <a name="reset_environment_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName"></a>

```python
def reset_environment_name() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_initial_vlans` <a name="reset_initial_vlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans"></a>

```python
def reset_initial_vlans() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_license_info` <a name="reset_license_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo"></a>

```python
def reset_license_info() -> None
```

##### `reset_service_access_security_groups` <a name="reset_service_access_security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups"></a>

```python
def reset_service_access_security_groups() -> None
```

##### `reset_site_id` <a name="reset_site_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId"></a>

```python
def reset_site_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vcf_hostnames` <a name="reset_vcf_hostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames"></a>

```python
def reset_vcf_hostnames() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EvsEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EvsEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EvsEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks">checks</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo">connectivity_info</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn">environment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState">environment_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts">hosts</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans">initial_vlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo">license_info</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups">service_access_security_groups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames">vcf_hostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput">connectivity_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput">environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput">hosts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput">initial_vlans_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput">license_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput">service_access_security_groups_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput">service_access_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput">terms_accepted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput">vcf_hostnames_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput">vcf_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName">environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId">service_access_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted">terms_accepted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion">vcf_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks"></a>

```python
checks: EvsEnvironmentChecksList
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a>

---

##### `connectivity_info`<sup>Required</sup> <a name="connectivity_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo"></a>

```python
connectivity_info: EvsEnvironmentConnectivityInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials"></a>

```python
credentials: EvsEnvironmentCredentialsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a>

---

##### `environment_arn`<sup>Required</sup> <a name="environment_arn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn"></a>

```python
environment_arn: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `environment_state`<sup>Required</sup> <a name="environment_state" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState"></a>

```python
environment_state: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts"></a>

```python
hosts: EvsEnvironmentHostsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_vlans`<sup>Required</sup> <a name="initial_vlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans"></a>

```python
initial_vlans: EvsEnvironmentInitialVlansOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a>

---

##### `license_info`<sup>Required</sup> <a name="license_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo"></a>

```python
license_info: EvsEnvironmentLicenseInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `service_access_security_groups`<sup>Required</sup> <a name="service_access_security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups"></a>

```python
service_access_security_groups: EvsEnvironmentServiceAccessSecurityGroupsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a>

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags"></a>

```python
tags: EvsEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a>

---

##### `vcf_hostnames`<sup>Required</sup> <a name="vcf_hostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames"></a>

```python
vcf_hostnames: EvsEnvironmentVcfHostnamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a>

---

##### `connectivity_info_input`<sup>Optional</sup> <a name="connectivity_info_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput"></a>

```python
connectivity_info_input: IResolvable | EvsEnvironmentConnectivityInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---

##### `environment_name_input`<sup>Optional</sup> <a name="environment_name_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput"></a>

```python
environment_name_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput"></a>

```python
hosts_input: IResolvable | typing.List[EvsEnvironmentHosts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]

---

##### `initial_vlans_input`<sup>Optional</sup> <a name="initial_vlans_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput"></a>

```python
initial_vlans_input: IResolvable | EvsEnvironmentInitialVlans
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `license_info_input`<sup>Optional</sup> <a name="license_info_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput"></a>

```python
license_info_input: IResolvable | EvsEnvironmentLicenseInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---

##### `service_access_security_groups_input`<sup>Optional</sup> <a name="service_access_security_groups_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput"></a>

```python
service_access_security_groups_input: IResolvable | EvsEnvironmentServiceAccessSecurityGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---

##### `service_access_subnet_id_input`<sup>Optional</sup> <a name="service_access_subnet_id_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput"></a>

```python
service_access_subnet_id_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EvsEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]

---

##### `terms_accepted_input`<sup>Optional</sup> <a name="terms_accepted_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput"></a>

```python
terms_accepted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vcf_hostnames_input`<sup>Optional</sup> <a name="vcf_hostnames_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput"></a>

```python
vcf_hostnames_input: IResolvable | EvsEnvironmentVcfHostnames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---

##### `vcf_version_input`<sup>Optional</sup> <a name="vcf_version_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput"></a>

```python
vcf_version_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `environment_name`<sup>Required</sup> <a name="environment_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `service_access_subnet_id`<sup>Required</sup> <a name="service_access_subnet_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId"></a>

```python
service_access_subnet_id: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

##### `terms_accepted`<sup>Required</sup> <a name="terms_accepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted"></a>

```python
terms_accepted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vcf_version`<sup>Required</sup> <a name="vcf_version" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion"></a>

```python
vcf_version: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EvsEnvironmentChecks <a name="EvsEnvironmentChecks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentChecks()
```


### EvsEnvironmentConfig <a name="EvsEnvironmentConfig" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_access_subnet_id: str,
  terms_accepted: bool | IResolvable,
  vcf_version: str,
  vpc_id: str,
  connectivity_info: EvsEnvironmentConnectivityInfo = None,
  environment_name: str = None,
  hosts: IResolvable | typing.List[EvsEnvironmentHosts] = None,
  initial_vlans: EvsEnvironmentInitialVlans = None,
  kms_key_id: str = None,
  license_info: EvsEnvironmentLicenseInfo = None,
  service_access_security_groups: EvsEnvironmentServiceAccessSecurityGroups = None,
  site_id: str = None,
  tags: IResolvable | typing.List[EvsEnvironmentTags] = None,
  vcf_hostnames: EvsEnvironmentVcfHostnames = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId">service_access_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted">terms_accepted</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion">vcf_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo">connectivity_info</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName">environment_name</a></code> | <code>str</code> | The name of an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts">hosts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]</code> | The initial hosts for environment only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans">initial_vlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | The initial Vlan configuration only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo">license_info</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | The license information for an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups">service_access_security_groups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId">site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames">vcf_hostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_access_subnet_id`<sup>Required</sup> <a name="service_access_subnet_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId"></a>

```python
service_access_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}.

---

##### `terms_accepted`<sup>Required</sup> <a name="terms_accepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted"></a>

```python
terms_accepted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}.

---

##### `vcf_version`<sup>Required</sup> <a name="vcf_version" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion"></a>

```python
vcf_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}.

---

##### `connectivity_info`<sup>Optional</sup> <a name="connectivity_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo"></a>

```python
connectivity_info: EvsEnvironmentConnectivityInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}.

---

##### `environment_name`<sup>Optional</sup> <a name="environment_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

The name of an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#environment_name EvsEnvironment#environment_name}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts"></a>

```python
hosts: IResolvable | typing.List[EvsEnvironmentHosts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]

The initial hosts for environment only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hosts EvsEnvironment#hosts}

---

##### `initial_vlans`<sup>Optional</sup> <a name="initial_vlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans"></a>

```python
initial_vlans: EvsEnvironmentInitialVlans
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

The initial Vlan configuration only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#initial_vlans EvsEnvironment#initial_vlans}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}.

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo"></a>

```python
license_info: EvsEnvironmentLicenseInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

The license information for an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#license_info EvsEnvironment#license_info}

---

##### `service_access_security_groups`<sup>Optional</sup> <a name="service_access_security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups"></a>

```python
service_access_security_groups: EvsEnvironmentServiceAccessSecurityGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}.

---

##### `site_id`<sup>Optional</sup> <a name="site_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EvsEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#tags EvsEnvironment#tags}

---

##### `vcf_hostnames`<sup>Optional</sup> <a name="vcf_hostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames"></a>

```python
vcf_hostnames: EvsEnvironmentVcfHostnames
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}.

---

### EvsEnvironmentConnectivityInfo <a name="EvsEnvironmentConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentConnectivityInfo(
  private_route_server_peerings: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings">private_route_server_peerings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}. |

---

##### `private_route_server_peerings`<sup>Optional</sup> <a name="private_route_server_peerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings"></a>

```python
private_route_server_peerings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}.

---

### EvsEnvironmentCredentials <a name="EvsEnvironmentCredentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentCredentials()
```


### EvsEnvironmentHosts <a name="EvsEnvironmentHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentHosts(
  dedicated_host_id: str = None,
  host_name: str = None,
  instance_type: str = None,
  key_name: str = None,
  placement_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId">dedicated_host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId">placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}. |

---

##### `dedicated_host_id`<sup>Optional</sup> <a name="dedicated_host_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId"></a>

```python
dedicated_host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}.

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}.

---

##### `placement_group_id`<sup>Optional</sup> <a name="placement_group_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId"></a>

```python
placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}.

---

### EvsEnvironmentInitialVlans <a name="EvsEnvironmentInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlans(
  edge_v_tep: EvsEnvironmentInitialVlansEdgeVTep = None,
  expansion_vlan1: EvsEnvironmentInitialVlansExpansionVlan1 = None,
  expansion_vlan2: EvsEnvironmentInitialVlansExpansionVlan2 = None,
  hcx: EvsEnvironmentInitialVlansHcx = None,
  hcx_network_acl_id: str = None,
  is_hcx_public: bool | IResolvable = None,
  nsx_up_link: EvsEnvironmentInitialVlansNsxUpLink = None,
  vmk_management: EvsEnvironmentInitialVlansVmkManagement = None,
  vm_management: EvsEnvironmentInitialVlansVmManagement = None,
  v_motion: EvsEnvironmentInitialVlansVMotion = None,
  v_san: EvsEnvironmentInitialVlansVSan = None,
  v_tep: EvsEnvironmentInitialVlansVTep = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep">edge_v_tep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1">expansion_vlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2">expansion_vlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx">hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId">hcx_network_acl_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic">is_hcx_public</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink">nsx_up_link</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement">vmk_management</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement">vm_management</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion">v_motion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan">v_san</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep">v_tep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}. |

---

##### `edge_v_tep`<sup>Optional</sup> <a name="edge_v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep"></a>

```python
edge_v_tep: EvsEnvironmentInitialVlansEdgeVTep
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}.

---

##### `expansion_vlan1`<sup>Optional</sup> <a name="expansion_vlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1"></a>

```python
expansion_vlan1: EvsEnvironmentInitialVlansExpansionVlan1
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}.

---

##### `expansion_vlan2`<sup>Optional</sup> <a name="expansion_vlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2"></a>

```python
expansion_vlan2: EvsEnvironmentInitialVlansExpansionVlan2
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}.

---

##### `hcx`<sup>Optional</sup> <a name="hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx"></a>

```python
hcx: EvsEnvironmentInitialVlansHcx
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}.

---

##### `hcx_network_acl_id`<sup>Optional</sup> <a name="hcx_network_acl_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId"></a>

```python
hcx_network_acl_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}.

---

##### `is_hcx_public`<sup>Optional</sup> <a name="is_hcx_public" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic"></a>

```python
is_hcx_public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}.

---

##### `nsx_up_link`<sup>Optional</sup> <a name="nsx_up_link" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink"></a>

```python
nsx_up_link: EvsEnvironmentInitialVlansNsxUpLink
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}.

---

##### `vmk_management`<sup>Optional</sup> <a name="vmk_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement"></a>

```python
vmk_management: EvsEnvironmentInitialVlansVmkManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}.

---

##### `vm_management`<sup>Optional</sup> <a name="vm_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement"></a>

```python
vm_management: EvsEnvironmentInitialVlansVmManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}.

---

##### `v_motion`<sup>Optional</sup> <a name="v_motion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion"></a>

```python
v_motion: EvsEnvironmentInitialVlansVMotion
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}.

---

##### `v_san`<sup>Optional</sup> <a name="v_san" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan"></a>

```python
v_san: EvsEnvironmentInitialVlansVSan
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}.

---

##### `v_tep`<sup>Optional</sup> <a name="v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep"></a>

```python
v_tep: EvsEnvironmentInitialVlansVTep
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}.

---

### EvsEnvironmentInitialVlansEdgeVTep <a name="EvsEnvironmentInitialVlansEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan1 <a name="EvsEnvironmentInitialVlansExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan2 <a name="EvsEnvironmentInitialVlansExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansHcx <a name="EvsEnvironmentInitialVlansHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansHcx(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansNsxUpLink <a name="EvsEnvironmentInitialVlansNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmkManagement <a name="EvsEnvironmentInitialVlansVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVmkManagement(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmManagement <a name="EvsEnvironmentInitialVlansVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVmManagement(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVMotion <a name="EvsEnvironmentInitialVlansVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVMotion(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVSan <a name="EvsEnvironmentInitialVlansVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVSan(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVTep <a name="EvsEnvironmentInitialVlansVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVTep(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentLicenseInfo <a name="EvsEnvironmentLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentLicenseInfo(
  solution_key: str = None,
  vsan_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey">solution_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey">vsan_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}. |

---

##### `solution_key`<sup>Optional</sup> <a name="solution_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey"></a>

```python
solution_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}.

---

##### `vsan_key`<sup>Optional</sup> <a name="vsan_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey"></a>

```python
vsan_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}.

---

### EvsEnvironmentServiceAccessSecurityGroups <a name="EvsEnvironmentServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups(
  security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}. |

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}.

---

### EvsEnvironmentTags <a name="EvsEnvironmentTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#key EvsEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#value EvsEnvironment#value}

---

### EvsEnvironmentVcfHostnames <a name="EvsEnvironmentVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentVcfHostnames(
  cloud_builder: str = None,
  nsx: str = None,
  nsx_edge1: str = None,
  nsx_edge2: str = None,
  nsx_manager1: str = None,
  nsx_manager2: str = None,
  nsx_manager3: str = None,
  sddc_manager: str = None,
  v_center: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder">cloud_builder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx">nsx</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1">nsx_edge1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2">nsx_edge2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1">nsx_manager1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2">nsx_manager2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3">nsx_manager3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager">sddc_manager</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter">v_center</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}. |

---

##### `cloud_builder`<sup>Optional</sup> <a name="cloud_builder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder"></a>

```python
cloud_builder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}.

---

##### `nsx`<sup>Optional</sup> <a name="nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx"></a>

```python
nsx: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}.

---

##### `nsx_edge1`<sup>Optional</sup> <a name="nsx_edge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1"></a>

```python
nsx_edge1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}.

---

##### `nsx_edge2`<sup>Optional</sup> <a name="nsx_edge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2"></a>

```python
nsx_edge2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}.

---

##### `nsx_manager1`<sup>Optional</sup> <a name="nsx_manager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1"></a>

```python
nsx_manager1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}.

---

##### `nsx_manager2`<sup>Optional</sup> <a name="nsx_manager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2"></a>

```python
nsx_manager2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}.

---

##### `nsx_manager3`<sup>Optional</sup> <a name="nsx_manager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3"></a>

```python
nsx_manager3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}.

---

##### `sddc_manager`<sup>Optional</sup> <a name="sddc_manager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager"></a>

```python
sddc_manager: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}.

---

##### `v_center`<sup>Optional</sup> <a name="v_center" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter"></a>

```python
v_center: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvsEnvironmentChecksList <a name="EvsEnvironmentChecksList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvsEnvironmentChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EvsEnvironmentChecksOutputReference <a name="EvsEnvironmentChecksOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince">impaired_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `impaired_since`<sup>Required</sup> <a name="impaired_since" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince"></a>

```python
impaired_since: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue"></a>

```python
internal_value: EvsEnvironmentChecks
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a>

---


### EvsEnvironmentConnectivityInfoOutputReference <a name="EvsEnvironmentConnectivityInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings">reset_private_route_server_peerings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_private_route_server_peerings` <a name="reset_private_route_server_peerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings"></a>

```python
def reset_private_route_server_peerings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput">private_route_server_peerings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings">private_route_server_peerings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_route_server_peerings_input`<sup>Optional</sup> <a name="private_route_server_peerings_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput"></a>

```python
private_route_server_peerings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_route_server_peerings`<sup>Required</sup> <a name="private_route_server_peerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings"></a>

```python
private_route_server_peerings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentConnectivityInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---


### EvsEnvironmentCredentialsList <a name="EvsEnvironmentCredentialsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvsEnvironmentCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EvsEnvironmentCredentialsOutputReference <a name="EvsEnvironmentCredentialsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: EvsEnvironmentCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a>

---


### EvsEnvironmentHostsList <a name="EvsEnvironmentHostsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentHostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvsEnvironmentHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvsEnvironmentHosts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>]

---


### EvsEnvironmentHostsOutputReference <a name="EvsEnvironmentHostsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId">reset_dedicated_host_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId">reset_placement_group_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dedicated_host_id` <a name="reset_dedicated_host_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId"></a>

```python
def reset_dedicated_host_id() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_placement_group_id` <a name="reset_placement_group_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId"></a>

```python
def reset_placement_group_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput">dedicated_host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput">placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId">dedicated_host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId">placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dedicated_host_id_input`<sup>Optional</sup> <a name="dedicated_host_id_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput"></a>

```python
dedicated_host_id_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `placement_group_id_input`<sup>Optional</sup> <a name="placement_group_id_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput"></a>

```python
placement_group_id_input: str
```

- *Type:* str

---

##### `dedicated_host_id`<sup>Required</sup> <a name="dedicated_host_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId"></a>

```python
dedicated_host_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `placement_group_id`<sup>Required</sup> <a name="placement_group_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId"></a>

```python
placement_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentHosts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>

---


### EvsEnvironmentInitialVlansEdgeVTepOutputReference <a name="EvsEnvironmentInitialVlansEdgeVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansEdgeVTep
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---


### EvsEnvironmentInitialVlansExpansionVlan1OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan1OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansExpansionVlan1
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---


### EvsEnvironmentInitialVlansExpansionVlan2OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan2OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansExpansionVlan2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---


### EvsEnvironmentInitialVlansHcxOutputReference <a name="EvsEnvironmentInitialVlansHcxOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansHcx
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---


### EvsEnvironmentInitialVlansNsxUpLinkOutputReference <a name="EvsEnvironmentInitialVlansNsxUpLinkOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansNsxUpLink
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---


### EvsEnvironmentInitialVlansOutputReference <a name="EvsEnvironmentInitialVlansOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep">put_edge_v_tep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1">put_expansion_vlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2">put_expansion_vlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx">put_hcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink">put_nsx_up_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement">put_vmk_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement">put_vm_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion">put_v_motion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan">put_v_san</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep">put_v_tep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep">reset_edge_v_tep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1">reset_expansion_vlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2">reset_expansion_vlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx">reset_hcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId">reset_hcx_network_acl_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic">reset_is_hcx_public</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink">reset_nsx_up_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement">reset_vmk_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement">reset_vm_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion">reset_v_motion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan">reset_v_san</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep">reset_v_tep</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_edge_v_tep` <a name="put_edge_v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep"></a>

```python
def put_edge_v_tep(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_expansion_vlan1` <a name="put_expansion_vlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1"></a>

```python
def put_expansion_vlan1(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_expansion_vlan2` <a name="put_expansion_vlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2"></a>

```python
def put_expansion_vlan2(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_hcx` <a name="put_hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx"></a>

```python
def put_hcx(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_nsx_up_link` <a name="put_nsx_up_link" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink"></a>

```python
def put_nsx_up_link(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_vmk_management` <a name="put_vmk_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement"></a>

```python
def put_vmk_management(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_vm_management` <a name="put_vm_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement"></a>

```python
def put_vm_management(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_v_motion` <a name="put_v_motion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion"></a>

```python
def put_v_motion(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_v_san` <a name="put_v_san" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan"></a>

```python
def put_v_san(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `put_v_tep` <a name="put_v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep"></a>

```python
def put_v_tep(
  cidr: str = None
) -> None
```

###### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

##### `reset_edge_v_tep` <a name="reset_edge_v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep"></a>

```python
def reset_edge_v_tep() -> None
```

##### `reset_expansion_vlan1` <a name="reset_expansion_vlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1"></a>

```python
def reset_expansion_vlan1() -> None
```

##### `reset_expansion_vlan2` <a name="reset_expansion_vlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2"></a>

```python
def reset_expansion_vlan2() -> None
```

##### `reset_hcx` <a name="reset_hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx"></a>

```python
def reset_hcx() -> None
```

##### `reset_hcx_network_acl_id` <a name="reset_hcx_network_acl_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId"></a>

```python
def reset_hcx_network_acl_id() -> None
```

##### `reset_is_hcx_public` <a name="reset_is_hcx_public" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic"></a>

```python
def reset_is_hcx_public() -> None
```

##### `reset_nsx_up_link` <a name="reset_nsx_up_link" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink"></a>

```python
def reset_nsx_up_link() -> None
```

##### `reset_vmk_management` <a name="reset_vmk_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement"></a>

```python
def reset_vmk_management() -> None
```

##### `reset_vm_management` <a name="reset_vm_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement"></a>

```python
def reset_vm_management() -> None
```

##### `reset_v_motion` <a name="reset_v_motion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion"></a>

```python
def reset_v_motion() -> None
```

##### `reset_v_san` <a name="reset_v_san" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan"></a>

```python
def reset_v_san() -> None
```

##### `reset_v_tep` <a name="reset_v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep"></a>

```python
def reset_v_tep() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep">edge_v_tep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1">expansion_vlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2">expansion_vlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx">hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink">nsx_up_link</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement">vmk_management</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement">vm_management</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion">v_motion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan">v_san</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep">v_tep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput">edge_v_tep_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input">expansion_vlan1_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input">expansion_vlan2_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput">hcx_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput">hcx_network_acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput">is_hcx_public_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput">nsx_up_link_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput">vmk_management_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput">vm_management_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput">v_motion_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput">v_san_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput">v_tep_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId">hcx_network_acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic">is_hcx_public</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_v_tep`<sup>Required</sup> <a name="edge_v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep"></a>

```python
edge_v_tep: EvsEnvironmentInitialVlansEdgeVTepOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a>

---

##### `expansion_vlan1`<sup>Required</sup> <a name="expansion_vlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1"></a>

```python
expansion_vlan1: EvsEnvironmentInitialVlansExpansionVlan1OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a>

---

##### `expansion_vlan2`<sup>Required</sup> <a name="expansion_vlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2"></a>

```python
expansion_vlan2: EvsEnvironmentInitialVlansExpansionVlan2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a>

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx"></a>

```python
hcx: EvsEnvironmentInitialVlansHcxOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a>

---

##### `nsx_up_link`<sup>Required</sup> <a name="nsx_up_link" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink"></a>

```python
nsx_up_link: EvsEnvironmentInitialVlansNsxUpLinkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a>

---

##### `vmk_management`<sup>Required</sup> <a name="vmk_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement"></a>

```python
vmk_management: EvsEnvironmentInitialVlansVmkManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a>

---

##### `vm_management`<sup>Required</sup> <a name="vm_management" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement"></a>

```python
vm_management: EvsEnvironmentInitialVlansVmManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a>

---

##### `v_motion`<sup>Required</sup> <a name="v_motion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion"></a>

```python
v_motion: EvsEnvironmentInitialVlansVMotionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a>

---

##### `v_san`<sup>Required</sup> <a name="v_san" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan"></a>

```python
v_san: EvsEnvironmentInitialVlansVSanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a>

---

##### `v_tep`<sup>Required</sup> <a name="v_tep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep"></a>

```python
v_tep: EvsEnvironmentInitialVlansVTepOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a>

---

##### `edge_v_tep_input`<sup>Optional</sup> <a name="edge_v_tep_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput"></a>

```python
edge_v_tep_input: IResolvable | EvsEnvironmentInitialVlansEdgeVTep
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---

##### `expansion_vlan1_input`<sup>Optional</sup> <a name="expansion_vlan1_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input"></a>

```python
expansion_vlan1_input: IResolvable | EvsEnvironmentInitialVlansExpansionVlan1
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---

##### `expansion_vlan2_input`<sup>Optional</sup> <a name="expansion_vlan2_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input"></a>

```python
expansion_vlan2_input: IResolvable | EvsEnvironmentInitialVlansExpansionVlan2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---

##### `hcx_input`<sup>Optional</sup> <a name="hcx_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput"></a>

```python
hcx_input: IResolvable | EvsEnvironmentInitialVlansHcx
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---

##### `hcx_network_acl_id_input`<sup>Optional</sup> <a name="hcx_network_acl_id_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput"></a>

```python
hcx_network_acl_id_input: str
```

- *Type:* str

---

##### `is_hcx_public_input`<sup>Optional</sup> <a name="is_hcx_public_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput"></a>

```python
is_hcx_public_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `nsx_up_link_input`<sup>Optional</sup> <a name="nsx_up_link_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput"></a>

```python
nsx_up_link_input: IResolvable | EvsEnvironmentInitialVlansNsxUpLink
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---

##### `vmk_management_input`<sup>Optional</sup> <a name="vmk_management_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput"></a>

```python
vmk_management_input: IResolvable | EvsEnvironmentInitialVlansVmkManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---

##### `vm_management_input`<sup>Optional</sup> <a name="vm_management_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput"></a>

```python
vm_management_input: IResolvable | EvsEnvironmentInitialVlansVmManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---

##### `v_motion_input`<sup>Optional</sup> <a name="v_motion_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput"></a>

```python
v_motion_input: IResolvable | EvsEnvironmentInitialVlansVMotion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---

##### `v_san_input`<sup>Optional</sup> <a name="v_san_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput"></a>

```python
v_san_input: IResolvable | EvsEnvironmentInitialVlansVSan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---

##### `v_tep_input`<sup>Optional</sup> <a name="v_tep_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput"></a>

```python
v_tep_input: IResolvable | EvsEnvironmentInitialVlansVTep
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---

##### `hcx_network_acl_id`<sup>Required</sup> <a name="hcx_network_acl_id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId"></a>

```python
hcx_network_acl_id: str
```

- *Type:* str

---

##### `is_hcx_public`<sup>Required</sup> <a name="is_hcx_public" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic"></a>

```python
is_hcx_public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlans
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---


### EvsEnvironmentInitialVlansVmkManagementOutputReference <a name="EvsEnvironmentInitialVlansVmkManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansVmkManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---


### EvsEnvironmentInitialVlansVmManagementOutputReference <a name="EvsEnvironmentInitialVlansVmManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansVmManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---


### EvsEnvironmentInitialVlansVMotionOutputReference <a name="EvsEnvironmentInitialVlansVMotionOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansVMotion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---


### EvsEnvironmentInitialVlansVSanOutputReference <a name="EvsEnvironmentInitialVlansVSanOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansVSan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---


### EvsEnvironmentInitialVlansVTepOutputReference <a name="EvsEnvironmentInitialVlansVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentInitialVlansVTep
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---


### EvsEnvironmentLicenseInfoOutputReference <a name="EvsEnvironmentLicenseInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentLicenseInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey">reset_solution_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey">reset_vsan_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_solution_key` <a name="reset_solution_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey"></a>

```python
def reset_solution_key() -> None
```

##### `reset_vsan_key` <a name="reset_vsan_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey"></a>

```python
def reset_vsan_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput">solution_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput">vsan_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey">solution_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey">vsan_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `solution_key_input`<sup>Optional</sup> <a name="solution_key_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput"></a>

```python
solution_key_input: str
```

- *Type:* str

---

##### `vsan_key_input`<sup>Optional</sup> <a name="vsan_key_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput"></a>

```python
vsan_key_input: str
```

- *Type:* str

---

##### `solution_key`<sup>Required</sup> <a name="solution_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey"></a>

```python
solution_key: str
```

- *Type:* str

---

##### `vsan_key`<sup>Required</sup> <a name="vsan_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey"></a>

```python
vsan_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentLicenseInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---


### EvsEnvironmentServiceAccessSecurityGroupsOutputReference <a name="EvsEnvironmentServiceAccessSecurityGroupsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentServiceAccessSecurityGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---


### EvsEnvironmentTagsList <a name="EvsEnvironmentTagsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvsEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvsEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>]

---


### EvsEnvironmentTagsOutputReference <a name="EvsEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>

---


### EvsEnvironmentVcfHostnamesOutputReference <a name="EvsEnvironmentVcfHostnamesOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evs_environment

evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder">reset_cloud_builder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx">reset_nsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1">reset_nsx_edge1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2">reset_nsx_edge2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1">reset_nsx_manager1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2">reset_nsx_manager2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3">reset_nsx_manager3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager">reset_sddc_manager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter">reset_v_center</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_builder` <a name="reset_cloud_builder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder"></a>

```python
def reset_cloud_builder() -> None
```

##### `reset_nsx` <a name="reset_nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx"></a>

```python
def reset_nsx() -> None
```

##### `reset_nsx_edge1` <a name="reset_nsx_edge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1"></a>

```python
def reset_nsx_edge1() -> None
```

##### `reset_nsx_edge2` <a name="reset_nsx_edge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2"></a>

```python
def reset_nsx_edge2() -> None
```

##### `reset_nsx_manager1` <a name="reset_nsx_manager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1"></a>

```python
def reset_nsx_manager1() -> None
```

##### `reset_nsx_manager2` <a name="reset_nsx_manager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2"></a>

```python
def reset_nsx_manager2() -> None
```

##### `reset_nsx_manager3` <a name="reset_nsx_manager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3"></a>

```python
def reset_nsx_manager3() -> None
```

##### `reset_sddc_manager` <a name="reset_sddc_manager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager"></a>

```python
def reset_sddc_manager() -> None
```

##### `reset_v_center` <a name="reset_v_center" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter"></a>

```python
def reset_v_center() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput">cloud_builder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input">nsx_edge1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input">nsx_edge2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput">nsx_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input">nsx_manager1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input">nsx_manager2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input">nsx_manager3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput">sddc_manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput">v_center_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder">cloud_builder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx">nsx</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1">nsx_edge1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2">nsx_edge2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1">nsx_manager1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2">nsx_manager2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3">nsx_manager3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager">sddc_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter">v_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_builder_input`<sup>Optional</sup> <a name="cloud_builder_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput"></a>

```python
cloud_builder_input: str
```

- *Type:* str

---

##### `nsx_edge1_input`<sup>Optional</sup> <a name="nsx_edge1_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input"></a>

```python
nsx_edge1_input: str
```

- *Type:* str

---

##### `nsx_edge2_input`<sup>Optional</sup> <a name="nsx_edge2_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input"></a>

```python
nsx_edge2_input: str
```

- *Type:* str

---

##### `nsx_input`<sup>Optional</sup> <a name="nsx_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput"></a>

```python
nsx_input: str
```

- *Type:* str

---

##### `nsx_manager1_input`<sup>Optional</sup> <a name="nsx_manager1_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input"></a>

```python
nsx_manager1_input: str
```

- *Type:* str

---

##### `nsx_manager2_input`<sup>Optional</sup> <a name="nsx_manager2_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input"></a>

```python
nsx_manager2_input: str
```

- *Type:* str

---

##### `nsx_manager3_input`<sup>Optional</sup> <a name="nsx_manager3_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input"></a>

```python
nsx_manager3_input: str
```

- *Type:* str

---

##### `sddc_manager_input`<sup>Optional</sup> <a name="sddc_manager_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput"></a>

```python
sddc_manager_input: str
```

- *Type:* str

---

##### `v_center_input`<sup>Optional</sup> <a name="v_center_input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput"></a>

```python
v_center_input: str
```

- *Type:* str

---

##### `cloud_builder`<sup>Required</sup> <a name="cloud_builder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder"></a>

```python
cloud_builder: str
```

- *Type:* str

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx"></a>

```python
nsx: str
```

- *Type:* str

---

##### `nsx_edge1`<sup>Required</sup> <a name="nsx_edge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1"></a>

```python
nsx_edge1: str
```

- *Type:* str

---

##### `nsx_edge2`<sup>Required</sup> <a name="nsx_edge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2"></a>

```python
nsx_edge2: str
```

- *Type:* str

---

##### `nsx_manager1`<sup>Required</sup> <a name="nsx_manager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1"></a>

```python
nsx_manager1: str
```

- *Type:* str

---

##### `nsx_manager2`<sup>Required</sup> <a name="nsx_manager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2"></a>

```python
nsx_manager2: str
```

- *Type:* str

---

##### `nsx_manager3`<sup>Required</sup> <a name="nsx_manager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3"></a>

```python
nsx_manager3: str
```

- *Type:* str

---

##### `sddc_manager`<sup>Required</sup> <a name="sddc_manager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager"></a>

```python
sddc_manager: str
```

- *Type:* str

---

##### `v_center`<sup>Required</sup> <a name="v_center" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter"></a>

```python
v_center: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvsEnvironmentVcfHostnames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---



