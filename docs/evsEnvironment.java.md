# `evsEnvironment` Submodule <a name="`evsEnvironment` Submodule" id="@cdktn/provider-awscc.evsEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvsEnvironment <a name="EvsEnvironment" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment awscc_evs_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironment;

EvsEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceAccessSubnetId(java.lang.String)
    .termsAccepted(java.lang.Boolean|IResolvable)
    .vcfVersion(java.lang.String)
    .vpcId(java.lang.String)
//  .connectivityInfo(EvsEnvironmentConnectivityInfo)
//  .environmentName(java.lang.String)
//  .hosts(IResolvable|java.util.List<EvsEnvironmentHosts>)
//  .initialVlans(EvsEnvironmentInitialVlans)
//  .kmsKeyId(java.lang.String)
//  .licenseInfo(EvsEnvironmentLicenseInfo)
//  .serviceAccessSecurityGroups(EvsEnvironmentServiceAccessSecurityGroups)
//  .siteId(java.lang.String)
//  .tags(IResolvable|java.util.List<EvsEnvironmentTags>)
//  .vcfHostnames(EvsEnvironmentVcfHostnames)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSubnetId">serviceAccessSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.termsAccepted">termsAccepted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfVersion">vcfVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.environmentName">environmentName</a></code> | <code>java.lang.String</code> | The name of an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.hosts">hosts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>></code> | The initial hosts for environment only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.initialVlans">initialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | The initial Vlan configuration only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.licenseInfo">licenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | The license information for an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSecurityGroups">serviceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfHostnames">vcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceAccessSubnetId`<sup>Required</sup> <a name="serviceAccessSubnetId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}.

---

##### `termsAccepted`<sup>Required</sup> <a name="termsAccepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.termsAccepted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}.

---

##### `vcfVersion`<sup>Required</sup> <a name="vcfVersion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}.

---

##### `connectivityInfo`<sup>Optional</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.connectivityInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}.

---

##### `environmentName`<sup>Optional</sup> <a name="environmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.environmentName"></a>

- *Type:* java.lang.String

The name of an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#environment_name EvsEnvironment#environment_name}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.hosts"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>>

The initial hosts for environment only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#hosts EvsEnvironment#hosts}

---

##### `initialVlans`<sup>Optional</sup> <a name="initialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.initialVlans"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

The initial Vlan configuration only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#initial_vlans EvsEnvironment#initial_vlans}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}.

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.licenseInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

The license information for an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#license_info EvsEnvironment#license_info}

---

##### `serviceAccessSecurityGroups`<sup>Optional</sup> <a name="serviceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.serviceAccessSecurityGroups"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#tags EvsEnvironment#tags}

---

##### `vcfHostnames`<sup>Optional</sup> <a name="vcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.vcfHostnames"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo">putConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans">putInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo">putLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups">putServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames">putVcfHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo">resetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName">resetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans">resetInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo">resetLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups">resetServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId">resetSiteId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames">resetVcfHostnames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectivityInfo` <a name="putConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo"></a>

```java
public void putConnectivityInfo(EvsEnvironmentConnectivityInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---

##### `putHosts` <a name="putHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts"></a>

```java
public void putHosts(IResolvable|java.util.List<EvsEnvironmentHosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>>

---

##### `putInitialVlans` <a name="putInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans"></a>

```java
public void putInitialVlans(EvsEnvironmentInitialVlans value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---

##### `putLicenseInfo` <a name="putLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo"></a>

```java
public void putLicenseInfo(EvsEnvironmentLicenseInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---

##### `putServiceAccessSecurityGroups` <a name="putServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups"></a>

```java
public void putServiceAccessSecurityGroups(EvsEnvironmentServiceAccessSecurityGroups value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EvsEnvironmentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>>

---

##### `putVcfHostnames` <a name="putVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames"></a>

```java
public void putVcfHostnames(EvsEnvironmentVcfHostnames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---

##### `resetConnectivityInfo` <a name="resetConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo"></a>

```java
public void resetConnectivityInfo()
```

##### `resetEnvironmentName` <a name="resetEnvironmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName"></a>

```java
public void resetEnvironmentName()
```

##### `resetHosts` <a name="resetHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetInitialVlans` <a name="resetInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans"></a>

```java
public void resetInitialVlans()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLicenseInfo` <a name="resetLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo"></a>

```java
public void resetLicenseInfo()
```

##### `resetServiceAccessSecurityGroups` <a name="resetServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups"></a>

```java
public void resetServiceAccessSecurityGroups()
```

##### `resetSiteId` <a name="resetSiteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId"></a>

```java
public void resetSiteId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags"></a>

```java
public void resetTags()
```

##### `resetVcfHostnames` <a name="resetVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames"></a>

```java
public void resetVcfHostnames()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironment;

EvsEnvironment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironment;

EvsEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironment;

EvsEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironment;

EvsEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EvsEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EvsEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EvsEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EvsEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks">checks</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn">environmentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState">environmentState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts">hosts</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans">initialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo">licenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups">serviceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames">vcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput">connectivityInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput">environmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput">hostsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput">initialVlansInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput">licenseInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput">serviceAccessSecurityGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput">serviceAccessSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput">termsAcceptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput">vcfHostnamesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput">vcfVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId">serviceAccessSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted">termsAccepted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion">vcfVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks"></a>

```java
public EvsEnvironmentChecksList getChecks();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a>

---

##### `connectivityInfo`<sup>Required</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo"></a>

```java
public EvsEnvironmentConnectivityInfoOutputReference getConnectivityInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials"></a>

```java
public EvsEnvironmentCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a>

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn"></a>

```java
public java.lang.String getEnvironmentArn();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `environmentState`<sup>Required</sup> <a name="environmentState" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState"></a>

```java
public java.lang.String getEnvironmentState();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts"></a>

```java
public EvsEnvironmentHostsList getHosts();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialVlans`<sup>Required</sup> <a name="initialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans"></a>

```java
public EvsEnvironmentInitialVlansOutputReference getInitialVlans();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a>

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo"></a>

```java
public EvsEnvironmentLicenseInfoOutputReference getLicenseInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `serviceAccessSecurityGroups`<sup>Required</sup> <a name="serviceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups"></a>

```java
public EvsEnvironmentServiceAccessSecurityGroupsOutputReference getServiceAccessSecurityGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a>

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags"></a>

```java
public EvsEnvironmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a>

---

##### `vcfHostnames`<sup>Required</sup> <a name="vcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames"></a>

```java
public EvsEnvironmentVcfHostnamesOutputReference getVcfHostnames();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a>

---

##### `connectivityInfoInput`<sup>Optional</sup> <a name="connectivityInfoInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput"></a>

```java
public IResolvable|EvsEnvironmentConnectivityInfo getConnectivityInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput"></a>

```java
public java.lang.String getEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput"></a>

```java
public IResolvable|java.util.List<EvsEnvironmentHosts> getHostsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>>

---

##### `initialVlansInput`<sup>Optional</sup> <a name="initialVlansInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlans getInitialVlansInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `licenseInfoInput`<sup>Optional</sup> <a name="licenseInfoInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput"></a>

```java
public IResolvable|EvsEnvironmentLicenseInfo getLicenseInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---

##### `serviceAccessSecurityGroupsInput`<sup>Optional</sup> <a name="serviceAccessSecurityGroupsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput"></a>

```java
public IResolvable|EvsEnvironmentServiceAccessSecurityGroups getServiceAccessSecurityGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---

##### `serviceAccessSubnetIdInput`<sup>Optional</sup> <a name="serviceAccessSubnetIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput"></a>

```java
public java.lang.String getServiceAccessSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EvsEnvironmentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>>

---

##### `termsAcceptedInput`<sup>Optional</sup> <a name="termsAcceptedInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput"></a>

```java
public java.lang.Boolean|IResolvable getTermsAcceptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vcfHostnamesInput`<sup>Optional</sup> <a name="vcfHostnamesInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput"></a>

```java
public IResolvable|EvsEnvironmentVcfHostnames getVcfHostnamesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---

##### `vcfVersionInput`<sup>Optional</sup> <a name="vcfVersionInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput"></a>

```java
public java.lang.String getVcfVersionInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `serviceAccessSubnetId`<sup>Required</sup> <a name="serviceAccessSubnetId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId"></a>

```java
public java.lang.String getServiceAccessSubnetId();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `termsAccepted`<sup>Required</sup> <a name="termsAccepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted"></a>

```java
public java.lang.Boolean|IResolvable getTermsAccepted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vcfVersion`<sup>Required</sup> <a name="vcfVersion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion"></a>

```java
public java.lang.String getVcfVersion();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EvsEnvironmentChecks <a name="EvsEnvironmentChecks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentChecks;

EvsEnvironmentChecks.builder()
    .build();
```


### EvsEnvironmentConfig <a name="EvsEnvironmentConfig" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentConfig;

EvsEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceAccessSubnetId(java.lang.String)
    .termsAccepted(java.lang.Boolean|IResolvable)
    .vcfVersion(java.lang.String)
    .vpcId(java.lang.String)
//  .connectivityInfo(EvsEnvironmentConnectivityInfo)
//  .environmentName(java.lang.String)
//  .hosts(IResolvable|java.util.List<EvsEnvironmentHosts>)
//  .initialVlans(EvsEnvironmentInitialVlans)
//  .kmsKeyId(java.lang.String)
//  .licenseInfo(EvsEnvironmentLicenseInfo)
//  .serviceAccessSecurityGroups(EvsEnvironmentServiceAccessSecurityGroups)
//  .siteId(java.lang.String)
//  .tags(IResolvable|java.util.List<EvsEnvironmentTags>)
//  .vcfHostnames(EvsEnvironmentVcfHostnames)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId">serviceAccessSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted">termsAccepted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion">vcfVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | The name of an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts">hosts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>></code> | The initial hosts for environment only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans">initialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | The initial Vlan configuration only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo">licenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | The license information for an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups">serviceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames">vcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceAccessSubnetId`<sup>Required</sup> <a name="serviceAccessSubnetId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId"></a>

```java
public java.lang.String getServiceAccessSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}.

---

##### `termsAccepted`<sup>Required</sup> <a name="termsAccepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted"></a>

```java
public java.lang.Boolean|IResolvable getTermsAccepted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}.

---

##### `vcfVersion`<sup>Required</sup> <a name="vcfVersion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion"></a>

```java
public java.lang.String getVcfVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}.

---

##### `connectivityInfo`<sup>Optional</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo"></a>

```java
public EvsEnvironmentConnectivityInfo getConnectivityInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}.

---

##### `environmentName`<sup>Optional</sup> <a name="environmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

The name of an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#environment_name EvsEnvironment#environment_name}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts"></a>

```java
public IResolvable|java.util.List<EvsEnvironmentHosts> getHosts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>>

The initial hosts for environment only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#hosts EvsEnvironment#hosts}

---

##### `initialVlans`<sup>Optional</sup> <a name="initialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans"></a>

```java
public EvsEnvironmentInitialVlans getInitialVlans();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

The initial Vlan configuration only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#initial_vlans EvsEnvironment#initial_vlans}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}.

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo"></a>

```java
public EvsEnvironmentLicenseInfo getLicenseInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

The license information for an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#license_info EvsEnvironment#license_info}

---

##### `serviceAccessSecurityGroups`<sup>Optional</sup> <a name="serviceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups"></a>

```java
public EvsEnvironmentServiceAccessSecurityGroups getServiceAccessSecurityGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EvsEnvironmentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#tags EvsEnvironment#tags}

---

##### `vcfHostnames`<sup>Optional</sup> <a name="vcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames"></a>

```java
public EvsEnvironmentVcfHostnames getVcfHostnames();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}.

---

### EvsEnvironmentConnectivityInfo <a name="EvsEnvironmentConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentConnectivityInfo;

EvsEnvironmentConnectivityInfo.builder()
//  .privateRouteServerPeerings(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings">privateRouteServerPeerings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}. |

---

##### `privateRouteServerPeerings`<sup>Optional</sup> <a name="privateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings"></a>

```java
public java.util.List<java.lang.String> getPrivateRouteServerPeerings();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}.

---

### EvsEnvironmentCredentials <a name="EvsEnvironmentCredentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentCredentials;

EvsEnvironmentCredentials.builder()
    .build();
```


### EvsEnvironmentHosts <a name="EvsEnvironmentHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentHosts;

EvsEnvironmentHosts.builder()
//  .dedicatedHostId(java.lang.String)
//  .hostName(java.lang.String)
//  .instanceType(java.lang.String)
//  .keyName(java.lang.String)
//  .placementGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId">placementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}. |

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId"></a>

```java
public java.lang.String getDedicatedHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}.

---

##### `placementGroupId`<sup>Optional</sup> <a name="placementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId"></a>

```java
public java.lang.String getPlacementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}.

---

### EvsEnvironmentInitialVlans <a name="EvsEnvironmentInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlans;

EvsEnvironmentInitialVlans.builder()
//  .edgeVTep(EvsEnvironmentInitialVlansEdgeVTep)
//  .expansionVlan1(EvsEnvironmentInitialVlansExpansionVlan1)
//  .expansionVlan2(EvsEnvironmentInitialVlansExpansionVlan2)
//  .hcx(EvsEnvironmentInitialVlansHcx)
//  .hcxNetworkAclId(java.lang.String)
//  .isHcxPublic(java.lang.Boolean|IResolvable)
//  .nsxUpLink(EvsEnvironmentInitialVlansNsxUpLink)
//  .vmkManagement(EvsEnvironmentInitialVlansVmkManagement)
//  .vmManagement(EvsEnvironmentInitialVlansVmManagement)
//  .vMotion(EvsEnvironmentInitialVlansVMotion)
//  .vSan(EvsEnvironmentInitialVlansVSan)
//  .vTep(EvsEnvironmentInitialVlansVTep)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep">edgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1">expansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2">expansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx">hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId">hcxNetworkAclId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic">isHcxPublic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink">nsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement">vmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement">vmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion">vMotion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan">vSan</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep">vTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}. |

---

##### `edgeVTep`<sup>Optional</sup> <a name="edgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep"></a>

```java
public EvsEnvironmentInitialVlansEdgeVTep getEdgeVTep();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}.

---

##### `expansionVlan1`<sup>Optional</sup> <a name="expansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1"></a>

```java
public EvsEnvironmentInitialVlansExpansionVlan1 getExpansionVlan1();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}.

---

##### `expansionVlan2`<sup>Optional</sup> <a name="expansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2"></a>

```java
public EvsEnvironmentInitialVlansExpansionVlan2 getExpansionVlan2();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}.

---

##### `hcx`<sup>Optional</sup> <a name="hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx"></a>

```java
public EvsEnvironmentInitialVlansHcx getHcx();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}.

---

##### `hcxNetworkAclId`<sup>Optional</sup> <a name="hcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId"></a>

```java
public java.lang.String getHcxNetworkAclId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}.

---

##### `isHcxPublic`<sup>Optional</sup> <a name="isHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic"></a>

```java
public java.lang.Boolean|IResolvable getIsHcxPublic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}.

---

##### `nsxUpLink`<sup>Optional</sup> <a name="nsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink"></a>

```java
public EvsEnvironmentInitialVlansNsxUpLink getNsxUpLink();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}.

---

##### `vmkManagement`<sup>Optional</sup> <a name="vmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement"></a>

```java
public EvsEnvironmentInitialVlansVmkManagement getVmkManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}.

---

##### `vmManagement`<sup>Optional</sup> <a name="vmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement"></a>

```java
public EvsEnvironmentInitialVlansVmManagement getVmManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}.

---

##### `vMotion`<sup>Optional</sup> <a name="vMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion"></a>

```java
public EvsEnvironmentInitialVlansVMotion getVMotion();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}.

---

##### `vSan`<sup>Optional</sup> <a name="vSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan"></a>

```java
public EvsEnvironmentInitialVlansVSan getVSan();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}.

---

##### `vTep`<sup>Optional</sup> <a name="vTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep"></a>

```java
public EvsEnvironmentInitialVlansVTep getVTep();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}.

---

### EvsEnvironmentInitialVlansEdgeVTep <a name="EvsEnvironmentInitialVlansEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansEdgeVTep;

EvsEnvironmentInitialVlansEdgeVTep.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan1 <a name="EvsEnvironmentInitialVlansExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansExpansionVlan1;

EvsEnvironmentInitialVlansExpansionVlan1.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan2 <a name="EvsEnvironmentInitialVlansExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansExpansionVlan2;

EvsEnvironmentInitialVlansExpansionVlan2.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansHcx <a name="EvsEnvironmentInitialVlansHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansHcx;

EvsEnvironmentInitialVlansHcx.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansNsxUpLink <a name="EvsEnvironmentInitialVlansNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansNsxUpLink;

EvsEnvironmentInitialVlansNsxUpLink.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmkManagement <a name="EvsEnvironmentInitialVlansVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVmkManagement;

EvsEnvironmentInitialVlansVmkManagement.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmManagement <a name="EvsEnvironmentInitialVlansVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVmManagement;

EvsEnvironmentInitialVlansVmManagement.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVMotion <a name="EvsEnvironmentInitialVlansVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVMotion;

EvsEnvironmentInitialVlansVMotion.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVSan <a name="EvsEnvironmentInitialVlansVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVSan;

EvsEnvironmentInitialVlansVSan.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVTep <a name="EvsEnvironmentInitialVlansVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVTep;

EvsEnvironmentInitialVlansVTep.builder()
//  .cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentLicenseInfo <a name="EvsEnvironmentLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentLicenseInfo;

EvsEnvironmentLicenseInfo.builder()
//  .solutionKey(java.lang.String)
//  .vsanKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey">solutionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey">vsanKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}. |

---

##### `solutionKey`<sup>Optional</sup> <a name="solutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey"></a>

```java
public java.lang.String getSolutionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}.

---

##### `vsanKey`<sup>Optional</sup> <a name="vsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey"></a>

```java
public java.lang.String getVsanKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}.

---

### EvsEnvironmentServiceAccessSecurityGroups <a name="EvsEnvironmentServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentServiceAccessSecurityGroups;

EvsEnvironmentServiceAccessSecurityGroups.builder()
//  .securityGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}.

---

### EvsEnvironmentTags <a name="EvsEnvironmentTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentTags;

EvsEnvironmentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#key EvsEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#value EvsEnvironment#value}

---

### EvsEnvironmentVcfHostnames <a name="EvsEnvironmentVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentVcfHostnames;

EvsEnvironmentVcfHostnames.builder()
//  .cloudBuilder(java.lang.String)
//  .nsx(java.lang.String)
//  .nsxEdge1(java.lang.String)
//  .nsxEdge2(java.lang.String)
//  .nsxManager1(java.lang.String)
//  .nsxManager2(java.lang.String)
//  .nsxManager3(java.lang.String)
//  .sddcManager(java.lang.String)
//  .vCenter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder">cloudBuilder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx">nsx</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1">nsxEdge1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2">nsxEdge2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1">nsxManager1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2">nsxManager2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3">nsxManager3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager">sddcManager</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter">vCenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}. |

---

##### `cloudBuilder`<sup>Optional</sup> <a name="cloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder"></a>

```java
public java.lang.String getCloudBuilder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}.

---

##### `nsx`<sup>Optional</sup> <a name="nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx"></a>

```java
public java.lang.String getNsx();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}.

---

##### `nsxEdge1`<sup>Optional</sup> <a name="nsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1"></a>

```java
public java.lang.String getNsxEdge1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}.

---

##### `nsxEdge2`<sup>Optional</sup> <a name="nsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2"></a>

```java
public java.lang.String getNsxEdge2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}.

---

##### `nsxManager1`<sup>Optional</sup> <a name="nsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1"></a>

```java
public java.lang.String getNsxManager1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}.

---

##### `nsxManager2`<sup>Optional</sup> <a name="nsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2"></a>

```java
public java.lang.String getNsxManager2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}.

---

##### `nsxManager3`<sup>Optional</sup> <a name="nsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3"></a>

```java
public java.lang.String getNsxManager3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}.

---

##### `sddcManager`<sup>Optional</sup> <a name="sddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager"></a>

```java
public java.lang.String getSddcManager();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}.

---

##### `vCenter`<sup>Optional</sup> <a name="vCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter"></a>

```java
public java.lang.String getVCenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvsEnvironmentChecksList <a name="EvsEnvironmentChecksList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentChecksList;

new EvsEnvironmentChecksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get"></a>

```java
public EvsEnvironmentChecksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EvsEnvironmentChecksOutputReference <a name="EvsEnvironmentChecksOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentChecksOutputReference;

new EvsEnvironmentChecksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince">impairedSince</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result">result</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `impairedSince`<sup>Required</sup> <a name="impairedSince" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince"></a>

```java
public java.lang.String getImpairedSince();
```

- *Type:* java.lang.String

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result"></a>

```java
public java.lang.String getResult();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue"></a>

```java
public EvsEnvironmentChecks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a>

---


### EvsEnvironmentConnectivityInfoOutputReference <a name="EvsEnvironmentConnectivityInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentConnectivityInfoOutputReference;

new EvsEnvironmentConnectivityInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings">resetPrivateRouteServerPeerings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateRouteServerPeerings` <a name="resetPrivateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings"></a>

```java
public void resetPrivateRouteServerPeerings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput">privateRouteServerPeeringsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings">privateRouteServerPeerings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateRouteServerPeeringsInput`<sup>Optional</sup> <a name="privateRouteServerPeeringsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput"></a>

```java
public java.util.List<java.lang.String> getPrivateRouteServerPeeringsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateRouteServerPeerings`<sup>Required</sup> <a name="privateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings"></a>

```java
public java.util.List<java.lang.String> getPrivateRouteServerPeerings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentConnectivityInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---


### EvsEnvironmentCredentialsList <a name="EvsEnvironmentCredentialsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentCredentialsList;

new EvsEnvironmentCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get"></a>

```java
public EvsEnvironmentCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EvsEnvironmentCredentialsOutputReference <a name="EvsEnvironmentCredentialsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentCredentialsOutputReference;

new EvsEnvironmentCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue"></a>

```java
public EvsEnvironmentCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a>

---


### EvsEnvironmentHostsList <a name="EvsEnvironmentHostsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentHostsList;

new EvsEnvironmentHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get"></a>

```java
public EvsEnvironmentHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvsEnvironmentHosts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>>

---


### EvsEnvironmentHostsOutputReference <a name="EvsEnvironmentHostsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentHostsOutputReference;

new EvsEnvironmentHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId">resetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId">resetPlacementGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDedicatedHostId` <a name="resetDedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId"></a>

```java
public void resetDedicatedHostId()
```

##### `resetHostName` <a name="resetHostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName"></a>

```java
public void resetHostName()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetPlacementGroupId` <a name="resetPlacementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId"></a>

```java
public void resetPlacementGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput">dedicatedHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput">placementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId">placementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dedicatedHostIdInput`<sup>Optional</sup> <a name="dedicatedHostIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput"></a>

```java
public java.lang.String getDedicatedHostIdInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `placementGroupIdInput`<sup>Optional</sup> <a name="placementGroupIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput"></a>

```java
public java.lang.String getPlacementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `dedicatedHostId`<sup>Required</sup> <a name="dedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId"></a>

```java
public java.lang.String getDedicatedHostId();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `placementGroupId`<sup>Required</sup> <a name="placementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId"></a>

```java
public java.lang.String getPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentHosts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>

---


### EvsEnvironmentInitialVlansEdgeVTepOutputReference <a name="EvsEnvironmentInitialVlansEdgeVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansEdgeVTepOutputReference;

new EvsEnvironmentInitialVlansEdgeVTepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansEdgeVTep getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---


### EvsEnvironmentInitialVlansExpansionVlan1OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan1OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference;

new EvsEnvironmentInitialVlansExpansionVlan1OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan1 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---


### EvsEnvironmentInitialVlansExpansionVlan2OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan2OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference;

new EvsEnvironmentInitialVlansExpansionVlan2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan2 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---


### EvsEnvironmentInitialVlansHcxOutputReference <a name="EvsEnvironmentInitialVlansHcxOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansHcxOutputReference;

new EvsEnvironmentInitialVlansHcxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansHcx getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---


### EvsEnvironmentInitialVlansNsxUpLinkOutputReference <a name="EvsEnvironmentInitialVlansNsxUpLinkOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference;

new EvsEnvironmentInitialVlansNsxUpLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansNsxUpLink getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---


### EvsEnvironmentInitialVlansOutputReference <a name="EvsEnvironmentInitialVlansOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansOutputReference;

new EvsEnvironmentInitialVlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep">putEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1">putExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2">putExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx">putHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink">putNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement">putVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement">putVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion">putVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan">putVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep">putVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep">resetEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1">resetExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2">resetExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx">resetHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId">resetHcxNetworkAclId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic">resetIsHcxPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink">resetNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement">resetVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement">resetVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion">resetVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan">resetVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep">resetVTep</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEdgeVTep` <a name="putEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep"></a>

```java
public void putEdgeVTep(EvsEnvironmentInitialVlansEdgeVTep value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---

##### `putExpansionVlan1` <a name="putExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1"></a>

```java
public void putExpansionVlan1(EvsEnvironmentInitialVlansExpansionVlan1 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---

##### `putExpansionVlan2` <a name="putExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2"></a>

```java
public void putExpansionVlan2(EvsEnvironmentInitialVlansExpansionVlan2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---

##### `putHcx` <a name="putHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx"></a>

```java
public void putHcx(EvsEnvironmentInitialVlansHcx value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---

##### `putNsxUpLink` <a name="putNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink"></a>

```java
public void putNsxUpLink(EvsEnvironmentInitialVlansNsxUpLink value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---

##### `putVmkManagement` <a name="putVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement"></a>

```java
public void putVmkManagement(EvsEnvironmentInitialVlansVmkManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---

##### `putVmManagement` <a name="putVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement"></a>

```java
public void putVmManagement(EvsEnvironmentInitialVlansVmManagement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---

##### `putVMotion` <a name="putVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion"></a>

```java
public void putVMotion(EvsEnvironmentInitialVlansVMotion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---

##### `putVSan` <a name="putVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan"></a>

```java
public void putVSan(EvsEnvironmentInitialVlansVSan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---

##### `putVTep` <a name="putVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep"></a>

```java
public void putVTep(EvsEnvironmentInitialVlansVTep value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---

##### `resetEdgeVTep` <a name="resetEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep"></a>

```java
public void resetEdgeVTep()
```

##### `resetExpansionVlan1` <a name="resetExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1"></a>

```java
public void resetExpansionVlan1()
```

##### `resetExpansionVlan2` <a name="resetExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2"></a>

```java
public void resetExpansionVlan2()
```

##### `resetHcx` <a name="resetHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx"></a>

```java
public void resetHcx()
```

##### `resetHcxNetworkAclId` <a name="resetHcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId"></a>

```java
public void resetHcxNetworkAclId()
```

##### `resetIsHcxPublic` <a name="resetIsHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic"></a>

```java
public void resetIsHcxPublic()
```

##### `resetNsxUpLink` <a name="resetNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink"></a>

```java
public void resetNsxUpLink()
```

##### `resetVmkManagement` <a name="resetVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement"></a>

```java
public void resetVmkManagement()
```

##### `resetVmManagement` <a name="resetVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement"></a>

```java
public void resetVmManagement()
```

##### `resetVMotion` <a name="resetVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion"></a>

```java
public void resetVMotion()
```

##### `resetVSan` <a name="resetVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan"></a>

```java
public void resetVSan()
```

##### `resetVTep` <a name="resetVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep"></a>

```java
public void resetVTep()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep">edgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1">expansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2">expansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx">hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink">nsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement">vmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement">vmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion">vMotion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan">vSan</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep">vTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput">edgeVTepInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input">expansionVlan1Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input">expansionVlan2Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput">hcxInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput">hcxNetworkAclIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput">isHcxPublicInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput">nsxUpLinkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput">vmkManagementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput">vmManagementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput">vMotionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput">vSanInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput">vTepInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId">hcxNetworkAclId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic">isHcxPublic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `edgeVTep`<sup>Required</sup> <a name="edgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep"></a>

```java
public EvsEnvironmentInitialVlansEdgeVTepOutputReference getEdgeVTep();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a>

---

##### `expansionVlan1`<sup>Required</sup> <a name="expansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1"></a>

```java
public EvsEnvironmentInitialVlansExpansionVlan1OutputReference getExpansionVlan1();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a>

---

##### `expansionVlan2`<sup>Required</sup> <a name="expansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2"></a>

```java
public EvsEnvironmentInitialVlansExpansionVlan2OutputReference getExpansionVlan2();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a>

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx"></a>

```java
public EvsEnvironmentInitialVlansHcxOutputReference getHcx();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a>

---

##### `nsxUpLink`<sup>Required</sup> <a name="nsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink"></a>

```java
public EvsEnvironmentInitialVlansNsxUpLinkOutputReference getNsxUpLink();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a>

---

##### `vmkManagement`<sup>Required</sup> <a name="vmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement"></a>

```java
public EvsEnvironmentInitialVlansVmkManagementOutputReference getVmkManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a>

---

##### `vmManagement`<sup>Required</sup> <a name="vmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement"></a>

```java
public EvsEnvironmentInitialVlansVmManagementOutputReference getVmManagement();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a>

---

##### `vMotion`<sup>Required</sup> <a name="vMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion"></a>

```java
public EvsEnvironmentInitialVlansVMotionOutputReference getVMotion();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a>

---

##### `vSan`<sup>Required</sup> <a name="vSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan"></a>

```java
public EvsEnvironmentInitialVlansVSanOutputReference getVSan();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a>

---

##### `vTep`<sup>Required</sup> <a name="vTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep"></a>

```java
public EvsEnvironmentInitialVlansVTepOutputReference getVTep();
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a>

---

##### `edgeVTepInput`<sup>Optional</sup> <a name="edgeVTepInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansEdgeVTep getEdgeVTepInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---

##### `expansionVlan1Input`<sup>Optional</sup> <a name="expansionVlan1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan1 getExpansionVlan1Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---

##### `expansionVlan2Input`<sup>Optional</sup> <a name="expansionVlan2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansExpansionVlan2 getExpansionVlan2Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---

##### `hcxInput`<sup>Optional</sup> <a name="hcxInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansHcx getHcxInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---

##### `hcxNetworkAclIdInput`<sup>Optional</sup> <a name="hcxNetworkAclIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput"></a>

```java
public java.lang.String getHcxNetworkAclIdInput();
```

- *Type:* java.lang.String

---

##### `isHcxPublicInput`<sup>Optional</sup> <a name="isHcxPublicInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput"></a>

```java
public java.lang.Boolean|IResolvable getIsHcxPublicInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nsxUpLinkInput`<sup>Optional</sup> <a name="nsxUpLinkInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansNsxUpLink getNsxUpLinkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---

##### `vmkManagementInput`<sup>Optional</sup> <a name="vmkManagementInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVmkManagement getVmkManagementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---

##### `vmManagementInput`<sup>Optional</sup> <a name="vmManagementInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVmManagement getVmManagementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---

##### `vMotionInput`<sup>Optional</sup> <a name="vMotionInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVMotion getVMotionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---

##### `vSanInput`<sup>Optional</sup> <a name="vSanInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVSan getVSanInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---

##### `vTepInput`<sup>Optional</sup> <a name="vTepInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVTep getVTepInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---

##### `hcxNetworkAclId`<sup>Required</sup> <a name="hcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId"></a>

```java
public java.lang.String getHcxNetworkAclId();
```

- *Type:* java.lang.String

---

##### `isHcxPublic`<sup>Required</sup> <a name="isHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic"></a>

```java
public java.lang.Boolean|IResolvable getIsHcxPublic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlans getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---


### EvsEnvironmentInitialVlansVmkManagementOutputReference <a name="EvsEnvironmentInitialVlansVmkManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVmkManagementOutputReference;

new EvsEnvironmentInitialVlansVmkManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVmkManagement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---


### EvsEnvironmentInitialVlansVmManagementOutputReference <a name="EvsEnvironmentInitialVlansVmManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVmManagementOutputReference;

new EvsEnvironmentInitialVlansVmManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVmManagement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---


### EvsEnvironmentInitialVlansVMotionOutputReference <a name="EvsEnvironmentInitialVlansVMotionOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVMotionOutputReference;

new EvsEnvironmentInitialVlansVMotionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVMotion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---


### EvsEnvironmentInitialVlansVSanOutputReference <a name="EvsEnvironmentInitialVlansVSanOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVSanOutputReference;

new EvsEnvironmentInitialVlansVSanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVSan getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---


### EvsEnvironmentInitialVlansVTepOutputReference <a name="EvsEnvironmentInitialVlansVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentInitialVlansVTepOutputReference;

new EvsEnvironmentInitialVlansVTepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr"></a>

```java
public void resetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentInitialVlansVTep getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---


### EvsEnvironmentLicenseInfoOutputReference <a name="EvsEnvironmentLicenseInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentLicenseInfoOutputReference;

new EvsEnvironmentLicenseInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey">resetSolutionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey">resetVsanKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSolutionKey` <a name="resetSolutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey"></a>

```java
public void resetSolutionKey()
```

##### `resetVsanKey` <a name="resetVsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey"></a>

```java
public void resetVsanKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput">solutionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput">vsanKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey">solutionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey">vsanKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `solutionKeyInput`<sup>Optional</sup> <a name="solutionKeyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput"></a>

```java
public java.lang.String getSolutionKeyInput();
```

- *Type:* java.lang.String

---

##### `vsanKeyInput`<sup>Optional</sup> <a name="vsanKeyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput"></a>

```java
public java.lang.String getVsanKeyInput();
```

- *Type:* java.lang.String

---

##### `solutionKey`<sup>Required</sup> <a name="solutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey"></a>

```java
public java.lang.String getSolutionKey();
```

- *Type:* java.lang.String

---

##### `vsanKey`<sup>Required</sup> <a name="vsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey"></a>

```java
public java.lang.String getVsanKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentLicenseInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---


### EvsEnvironmentServiceAccessSecurityGroupsOutputReference <a name="EvsEnvironmentServiceAccessSecurityGroupsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference;

new EvsEnvironmentServiceAccessSecurityGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentServiceAccessSecurityGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---


### EvsEnvironmentTagsList <a name="EvsEnvironmentTagsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentTagsList;

new EvsEnvironmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get"></a>

```java
public EvsEnvironmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EvsEnvironmentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>>

---


### EvsEnvironmentTagsOutputReference <a name="EvsEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentTagsOutputReference;

new EvsEnvironmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>

---


### EvsEnvironmentVcfHostnamesOutputReference <a name="EvsEnvironmentVcfHostnamesOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.evs_environment.EvsEnvironmentVcfHostnamesOutputReference;

new EvsEnvironmentVcfHostnamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder">resetCloudBuilder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx">resetNsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1">resetNsxEdge1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2">resetNsxEdge2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1">resetNsxManager1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2">resetNsxManager2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3">resetNsxManager3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager">resetSddcManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter">resetVCenter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudBuilder` <a name="resetCloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder"></a>

```java
public void resetCloudBuilder()
```

##### `resetNsx` <a name="resetNsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx"></a>

```java
public void resetNsx()
```

##### `resetNsxEdge1` <a name="resetNsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1"></a>

```java
public void resetNsxEdge1()
```

##### `resetNsxEdge2` <a name="resetNsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2"></a>

```java
public void resetNsxEdge2()
```

##### `resetNsxManager1` <a name="resetNsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1"></a>

```java
public void resetNsxManager1()
```

##### `resetNsxManager2` <a name="resetNsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2"></a>

```java
public void resetNsxManager2()
```

##### `resetNsxManager3` <a name="resetNsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3"></a>

```java
public void resetNsxManager3()
```

##### `resetSddcManager` <a name="resetSddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager"></a>

```java
public void resetSddcManager()
```

##### `resetVCenter` <a name="resetVCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter"></a>

```java
public void resetVCenter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput">cloudBuilderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input">nsxEdge1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input">nsxEdge2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput">nsxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input">nsxManager1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input">nsxManager2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input">nsxManager3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput">sddcManagerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput">vCenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder">cloudBuilder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx">nsx</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1">nsxEdge1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2">nsxEdge2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1">nsxManager1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2">nsxManager2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3">nsxManager3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager">sddcManager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter">vCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudBuilderInput`<sup>Optional</sup> <a name="cloudBuilderInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput"></a>

```java
public java.lang.String getCloudBuilderInput();
```

- *Type:* java.lang.String

---

##### `nsxEdge1Input`<sup>Optional</sup> <a name="nsxEdge1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input"></a>

```java
public java.lang.String getNsxEdge1Input();
```

- *Type:* java.lang.String

---

##### `nsxEdge2Input`<sup>Optional</sup> <a name="nsxEdge2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input"></a>

```java
public java.lang.String getNsxEdge2Input();
```

- *Type:* java.lang.String

---

##### `nsxInput`<sup>Optional</sup> <a name="nsxInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput"></a>

```java
public java.lang.String getNsxInput();
```

- *Type:* java.lang.String

---

##### `nsxManager1Input`<sup>Optional</sup> <a name="nsxManager1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input"></a>

```java
public java.lang.String getNsxManager1Input();
```

- *Type:* java.lang.String

---

##### `nsxManager2Input`<sup>Optional</sup> <a name="nsxManager2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input"></a>

```java
public java.lang.String getNsxManager2Input();
```

- *Type:* java.lang.String

---

##### `nsxManager3Input`<sup>Optional</sup> <a name="nsxManager3Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input"></a>

```java
public java.lang.String getNsxManager3Input();
```

- *Type:* java.lang.String

---

##### `sddcManagerInput`<sup>Optional</sup> <a name="sddcManagerInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput"></a>

```java
public java.lang.String getSddcManagerInput();
```

- *Type:* java.lang.String

---

##### `vCenterInput`<sup>Optional</sup> <a name="vCenterInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput"></a>

```java
public java.lang.String getVCenterInput();
```

- *Type:* java.lang.String

---

##### `cloudBuilder`<sup>Required</sup> <a name="cloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder"></a>

```java
public java.lang.String getCloudBuilder();
```

- *Type:* java.lang.String

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx"></a>

```java
public java.lang.String getNsx();
```

- *Type:* java.lang.String

---

##### `nsxEdge1`<sup>Required</sup> <a name="nsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1"></a>

```java
public java.lang.String getNsxEdge1();
```

- *Type:* java.lang.String

---

##### `nsxEdge2`<sup>Required</sup> <a name="nsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2"></a>

```java
public java.lang.String getNsxEdge2();
```

- *Type:* java.lang.String

---

##### `nsxManager1`<sup>Required</sup> <a name="nsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1"></a>

```java
public java.lang.String getNsxManager1();
```

- *Type:* java.lang.String

---

##### `nsxManager2`<sup>Required</sup> <a name="nsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2"></a>

```java
public java.lang.String getNsxManager2();
```

- *Type:* java.lang.String

---

##### `nsxManager3`<sup>Required</sup> <a name="nsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3"></a>

```java
public java.lang.String getNsxManager3();
```

- *Type:* java.lang.String

---

##### `sddcManager`<sup>Required</sup> <a name="sddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager"></a>

```java
public java.lang.String getSddcManager();
```

- *Type:* java.lang.String

---

##### `vCenter`<sup>Required</sup> <a name="vCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter"></a>

```java
public java.lang.String getVCenter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue"></a>

```java
public IResolvable|EvsEnvironmentVcfHostnames getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---



