# `resiliencehubv2Service` Submodule <a name="`resiliencehubv2Service` Submodule" id="@cdktn/provider-awscc.resiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Service <a name="Resiliencehubv2Service" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2Service;

Resiliencehubv2Service.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .regions(java.util.List<java.lang.String>)
//  .assertions(IResolvable|java.util.List<Resiliencehubv2ServiceAssertions>)
//  .associatedSystems(IResolvable|java.util.List<Resiliencehubv2ServiceAssociatedSystems>)
//  .dependencyDiscovery(java.lang.String)
//  .description(java.lang.String)
//  .inputSources(IResolvable|java.util.List<Resiliencehubv2ServiceInputSources>)
//  .kmsKeyId(java.lang.String)
//  .permissionModel(Resiliencehubv2ServicePermissionModel)
//  .policyArn(java.lang.String)
//  .reportConfiguration(Resiliencehubv2ServiceReportConfiguration)
//  .tags(IResolvable|java.util.List<Resiliencehubv2ServiceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | AWS regions for the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.assertions">assertions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>></code> | Assertions associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.associatedSystems">associatedSystems</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>></code> | Systems associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependencyDiscovery">dependencyDiscovery</a></code> | <code>java.lang.String</code> | Dependency discovery state. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.inputSources">inputSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>></code> | Input sources for this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The KMS key ID for encrypting service data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.policyArn">policyArn</a></code> | <code>java.lang.String</code> | The ARN of the resilience policy to associate. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.reportConfiguration">reportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | Configuration for automatic report generation on a Service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>></code> | Tags assigned to the service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.regions"></a>

- *Type:* java.util.List<java.lang.String>

AWS regions for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}

---

##### `assertions`<sup>Optional</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.assertions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>>

Assertions associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#assertions Resiliencehubv2Service#assertions}

---

##### `associatedSystems`<sup>Optional</sup> <a name="associatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.associatedSystems"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>>

Systems associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#associated_systems Resiliencehubv2Service#associated_systems}

---

##### `dependencyDiscovery`<sup>Optional</sup> <a name="dependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependencyDiscovery"></a>

- *Type:* java.lang.String

Dependency discovery state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}

---

##### `inputSources`<sup>Optional</sup> <a name="inputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.inputSources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>>

Input sources for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#input_sources Resiliencehubv2Service#input_sources}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The KMS key ID for encrypting service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.permissionModel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.policyArn"></a>

- *Type:* java.lang.String

The ARN of the resilience policy to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}

---

##### `reportConfiguration`<sup>Optional</sup> <a name="reportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.reportConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

Configuration for automatic report generation on a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#report_configuration Resiliencehubv2Service#report_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>>

Tags assigned to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions">putAssertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems">putAssociatedSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources">putInputSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel">putPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration">putReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions">resetAssertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems">resetAssociatedSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery">resetDependencyDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources">resetInputSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel">resetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration">resetReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssertions` <a name="putAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions"></a>

```java
public void putAssertions(IResolvable|java.util.List<Resiliencehubv2ServiceAssertions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>>

---

##### `putAssociatedSystems` <a name="putAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems"></a>

```java
public void putAssociatedSystems(IResolvable|java.util.List<Resiliencehubv2ServiceAssociatedSystems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>>

---

##### `putInputSources` <a name="putInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources"></a>

```java
public void putInputSources(IResolvable|java.util.List<Resiliencehubv2ServiceInputSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>>

---

##### `putPermissionModel` <a name="putPermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel"></a>

```java
public void putPermissionModel(Resiliencehubv2ServicePermissionModel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---

##### `putReportConfiguration` <a name="putReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration"></a>

```java
public void putReportConfiguration(Resiliencehubv2ServiceReportConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Resiliencehubv2ServiceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>>

---

##### `resetAssertions` <a name="resetAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions"></a>

```java
public void resetAssertions()
```

##### `resetAssociatedSystems` <a name="resetAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems"></a>

```java
public void resetAssociatedSystems()
```

##### `resetDependencyDiscovery` <a name="resetDependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery"></a>

```java
public void resetDependencyDiscovery()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInputSources` <a name="resetInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources"></a>

```java
public void resetInputSources()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPermissionModel` <a name="resetPermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel"></a>

```java
public void resetPermissionModel()
```

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn"></a>

```java
public void resetPolicyArn()
```

##### `resetReportConfiguration` <a name="resetReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration"></a>

```java
public void resetReportConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2Service;

Resiliencehubv2Service.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2Service;

Resiliencehubv2Service.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2Service;

Resiliencehubv2Service.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2Service;

Resiliencehubv2Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Resiliencehubv2Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Resiliencehubv2Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Resiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions">assertions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems">associatedSystems</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues">effectivePolicyValues</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources">inputSources</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration">reportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput">assertionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput">associatedSystemsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput">dependencyDiscoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput">inputSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput">permissionModelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput">policyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput">reportConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery">dependencyDiscovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assertions`<sup>Required</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions"></a>

```java
public Resiliencehubv2ServiceAssertionsList getAssertions();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a>

---

##### `associatedSystems`<sup>Required</sup> <a name="associatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems"></a>

```java
public Resiliencehubv2ServiceAssociatedSystemsList getAssociatedSystems();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `effectivePolicyValues`<sup>Required</sup> <a name="effectivePolicyValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesOutputReference getEffectivePolicyValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputSources`<sup>Required</sup> <a name="inputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources"></a>

```java
public Resiliencehubv2ServiceInputSourcesList getInputSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a>

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel"></a>

```java
public Resiliencehubv2ServicePermissionModelOutputReference getPermissionModel();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a>

---

##### `reportConfiguration`<sup>Required</sup> <a name="reportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration"></a>

```java
public Resiliencehubv2ServiceReportConfigurationOutputReference getReportConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags"></a>

```java
public Resiliencehubv2ServiceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `assertionsInput`<sup>Optional</sup> <a name="assertionsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceAssertions> getAssertionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>>

---

##### `associatedSystemsInput`<sup>Optional</sup> <a name="associatedSystemsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceAssociatedSystems> getAssociatedSystemsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>>

---

##### `dependencyDiscoveryInput`<sup>Optional</sup> <a name="dependencyDiscoveryInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput"></a>

```java
public java.lang.String getDependencyDiscoveryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inputSourcesInput`<sup>Optional</sup> <a name="inputSourcesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceInputSources> getInputSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput"></a>

```java
public IResolvable|Resiliencehubv2ServicePermissionModel getPermissionModelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput"></a>

```java
public java.lang.String getPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reportConfigurationInput`<sup>Optional</sup> <a name="reportConfigurationInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput"></a>

```java
public IResolvable|Resiliencehubv2ServiceReportConfiguration getReportConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>>

---

##### `dependencyDiscovery`<sup>Required</sup> <a name="dependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery"></a>

```java
public java.lang.String getDependencyDiscovery();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceAssertions <a name="Resiliencehubv2ServiceAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceAssertions;

Resiliencehubv2ServiceAssertions.builder()
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text">text</a></code> | <code>java.lang.String</code> | The text of the assertion. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The text of the assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#text Resiliencehubv2Service#text}

---

### Resiliencehubv2ServiceAssociatedSystems <a name="Resiliencehubv2ServiceAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceAssociatedSystems;

Resiliencehubv2ServiceAssociatedSystems.builder()
//  .systemArn(java.lang.String)
//  .userJourneyIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn">systemArn</a></code> | <code>java.lang.String</code> | The system ARN. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds">userJourneyIds</a></code> | <code>java.util.List<java.lang.String></code> | User journey IDs associated with this system. |

---

##### `systemArn`<sup>Optional</sup> <a name="systemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn"></a>

```java
public java.lang.String getSystemArn();
```

- *Type:* java.lang.String

The system ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}

---

##### `userJourneyIds`<sup>Optional</sup> <a name="userJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds"></a>

```java
public java.util.List<java.lang.String> getUserJourneyIds();
```

- *Type:* java.util.List<java.lang.String>

User journey IDs associated with this system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}

---

### Resiliencehubv2ServiceConfig <a name="Resiliencehubv2ServiceConfig" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceConfig;

Resiliencehubv2ServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .regions(java.util.List<java.lang.String>)
//  .assertions(IResolvable|java.util.List<Resiliencehubv2ServiceAssertions>)
//  .associatedSystems(IResolvable|java.util.List<Resiliencehubv2ServiceAssociatedSystems>)
//  .dependencyDiscovery(java.lang.String)
//  .description(java.lang.String)
//  .inputSources(IResolvable|java.util.List<Resiliencehubv2ServiceInputSources>)
//  .kmsKeyId(java.lang.String)
//  .permissionModel(Resiliencehubv2ServicePermissionModel)
//  .policyArn(java.lang.String)
//  .reportConfiguration(Resiliencehubv2ServiceReportConfiguration)
//  .tags(IResolvable|java.util.List<Resiliencehubv2ServiceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | AWS regions for the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions">assertions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>></code> | Assertions associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems">associatedSystems</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>></code> | Systems associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery">dependencyDiscovery</a></code> | <code>java.lang.String</code> | Dependency discovery state. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources">inputSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>></code> | Input sources for this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The KMS key ID for encrypting service data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | The ARN of the resilience policy to associate. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration">reportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | Configuration for automatic report generation on a Service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>></code> | Tags assigned to the service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

AWS regions for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}

---

##### `assertions`<sup>Optional</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceAssertions> getAssertions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>>

Assertions associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#assertions Resiliencehubv2Service#assertions}

---

##### `associatedSystems`<sup>Optional</sup> <a name="associatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceAssociatedSystems> getAssociatedSystems();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>>

Systems associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#associated_systems Resiliencehubv2Service#associated_systems}

---

##### `dependencyDiscovery`<sup>Optional</sup> <a name="dependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery"></a>

```java
public java.lang.String getDependencyDiscovery();
```

- *Type:* java.lang.String

Dependency discovery state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}

---

##### `inputSources`<sup>Optional</sup> <a name="inputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceInputSources> getInputSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>>

Input sources for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#input_sources Resiliencehubv2Service#input_sources}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The KMS key ID for encrypting service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel"></a>

```java
public Resiliencehubv2ServicePermissionModel getPermissionModel();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

The ARN of the resilience policy to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}

---

##### `reportConfiguration`<sup>Optional</sup> <a name="reportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration"></a>

```java
public Resiliencehubv2ServiceReportConfiguration getReportConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

Configuration for automatic report generation on a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#report_configuration Resiliencehubv2Service#report_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>>

Tags assigned to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}

---

### Resiliencehubv2ServiceEffectivePolicyValues <a name="Resiliencehubv2ServiceEffectivePolicyValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValues;

Resiliencehubv2ServiceEffectivePolicyValues.builder()
    .build();
```


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo;

Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo.builder()
    .build();
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach;

Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach.builder()
    .build();
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo;

Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo.builder()
    .build();
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto;

Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto.builder()
    .build();
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach;

Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach.builder()
    .build();
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo;

Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo.builder()
    .build();
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto;

Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto.builder()
    .build();
```


### Resiliencehubv2ServiceInputSources <a name="Resiliencehubv2ServiceInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSources;

Resiliencehubv2ServiceInputSources.builder()
//  .resourceConfiguration(Resiliencehubv2ServiceInputSourcesResourceConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | Resource configuration for an input source. Provide exactly one field. |

---

##### `resourceConfiguration`<sup>Optional</sup> <a name="resourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration"></a>

```java
public Resiliencehubv2ServiceInputSourcesResourceConfiguration getResourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

Resource configuration for an input source. Provide exactly one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#resource_configuration Resiliencehubv2Service#resource_configuration}

---

### Resiliencehubv2ServiceInputSourcesResourceConfiguration <a name="Resiliencehubv2ServiceInputSourcesResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesResourceConfiguration;

Resiliencehubv2ServiceInputSourcesResourceConfiguration.builder()
//  .cfnStackArn(java.lang.String)
//  .designFileS3Url(java.lang.String)
//  .eks(Resiliencehubv2ServiceInputSourcesResourceConfigurationEks)
//  .resourceTags(IResolvable|java.util.List<Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags>)
//  .tfStateFileUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn">cfnStackArn</a></code> | <code>java.lang.String</code> | ARN of a CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url">designFileS3Url</a></code> | <code>java.lang.String</code> | S3 URL of a design file. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags">resourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>></code> | Resource tags to discover resources. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>java.lang.String</code> | URL of a Terraform state file. |

---

##### `cfnStackArn`<sup>Optional</sup> <a name="cfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn"></a>

```java
public java.lang.String getCfnStackArn();
```

- *Type:* java.lang.String

ARN of a CloudFormation stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cfn_stack_arn Resiliencehubv2Service#cfn_stack_arn}

---

##### `designFileS3Url`<sup>Optional</sup> <a name="designFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url"></a>

```java
public java.lang.String getDesignFileS3Url();
```

- *Type:* java.lang.String

S3 URL of a design file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#design_file_s3_url Resiliencehubv2Service#design_file_s3_url}

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks"></a>

```java
public Resiliencehubv2ServiceInputSourcesResourceConfigurationEks getEks();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags> getResourceTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>>

Resource tags to discover resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#resource_tags Resiliencehubv2Service#resource_tags}

---

##### `tfStateFileUrl`<sup>Optional</sup> <a name="tfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl"></a>

```java
public java.lang.String getTfStateFileUrl();
```

- *Type:* java.lang.String

URL of a Terraform state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#tf_state_file_url Resiliencehubv2Service#tf_state_file_url}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationEks <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks;

Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.builder()
//  .clusterArn(java.lang.String)
//  .namespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | ARN of the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | EKS namespaces. |

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

ARN of the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cluster_arn Resiliencehubv2Service#cluster_arn}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

EKS namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#namespaces Resiliencehubv2Service#namespaces}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags;

Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Tag values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#values Resiliencehubv2Service#values}

---

### Resiliencehubv2ServicePermissionModel <a name="Resiliencehubv2ServicePermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServicePermissionModel;

Resiliencehubv2ServicePermissionModel.builder()
//  .crossAccountRoleArns(IResolvable|java.util.List<Resiliencehubv2ServicePermissionModelCrossAccountRoleArns>)
//  .invokerRoleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>></code> | Cross-account role ARNs. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName">invokerRoleName</a></code> | <code>java.lang.String</code> | Name of the invoker IAM role. |

---

##### `crossAccountRoleArns`<sup>Optional</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServicePermissionModelCrossAccountRoleArns> getCrossAccountRoleArns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>>

Cross-account role ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cross_account_role_arns Resiliencehubv2Service#cross_account_role_arns}

---

##### `invokerRoleName`<sup>Optional</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName"></a>

```java
public java.lang.String getInvokerRoleName();
```

- *Type:* java.lang.String

Name of the invoker IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}

---

### Resiliencehubv2ServicePermissionModelCrossAccountRoleArns <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns;

Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.builder()
//  .crossAccountRoleArn(java.lang.String)
//  .externalId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>java.lang.String</code> | ARN of the cross-account IAM role. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId">externalId</a></code> | <code>java.lang.String</code> | External ID for cross-account access. |

---

##### `crossAccountRoleArn`<sup>Optional</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn"></a>

```java
public java.lang.String getCrossAccountRoleArn();
```

- *Type:* java.lang.String

ARN of the cross-account IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

External ID for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}

---

### Resiliencehubv2ServiceReportConfiguration <a name="Resiliencehubv2ServiceReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceReportConfiguration;

Resiliencehubv2ServiceReportConfiguration.builder()
//  .reportOutput(IResolvable|java.util.List<Resiliencehubv2ServiceReportConfigurationReportOutput>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput">reportOutput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>></code> | Output destinations for generated reports. |

---

##### `reportOutput`<sup>Optional</sup> <a name="reportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceReportConfigurationReportOutput> getReportOutput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>>

Output destinations for generated reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#report_output Resiliencehubv2Service#report_output}

---

### Resiliencehubv2ServiceReportConfigurationReportOutput <a name="Resiliencehubv2ServiceReportConfigurationReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceReportConfigurationReportOutput;

Resiliencehubv2ServiceReportConfigurationReportOutput.builder()
//  .s3(Resiliencehubv2ServiceReportConfigurationReportOutputS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | S3 configuration for report output. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3"></a>

```java
public Resiliencehubv2ServiceReportConfigurationReportOutputS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

S3 configuration for report output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#s3 Resiliencehubv2Service#s3}

---

### Resiliencehubv2ServiceReportConfigurationReportOutputS3 <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceReportConfigurationReportOutputS3;

Resiliencehubv2ServiceReportConfigurationReportOutputS3.builder()
//  .bucketOwner(java.lang.String)
//  .bucketPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Account ID of the bucket owner. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath">bucketPath</a></code> | <code>java.lang.String</code> | S3 bucket path where reports will be written. |

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Account ID of the bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#bucket_owner Resiliencehubv2Service#bucket_owner}

---

##### `bucketPath`<sup>Optional</sup> <a name="bucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath"></a>

```java
public java.lang.String getBucketPath();
```

- *Type:* java.lang.String

S3 bucket path where reports will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#bucket_path Resiliencehubv2Service#bucket_path}

---

### Resiliencehubv2ServiceTags <a name="Resiliencehubv2ServiceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceTags;

Resiliencehubv2ServiceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#value Resiliencehubv2Service#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2ServiceAssertionsList <a name="Resiliencehubv2ServiceAssertionsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceAssertionsList;

new Resiliencehubv2ServiceAssertionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get"></a>

```java
public Resiliencehubv2ServiceAssertionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceAssertions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>>

---


### Resiliencehubv2ServiceAssertionsOutputReference <a name="Resiliencehubv2ServiceAssertionsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceAssertionsOutputReference;

new Resiliencehubv2ServiceAssertionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceAssertions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>

---


### Resiliencehubv2ServiceAssociatedSystemsList <a name="Resiliencehubv2ServiceAssociatedSystemsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceAssociatedSystemsList;

new Resiliencehubv2ServiceAssociatedSystemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get"></a>

```java
public Resiliencehubv2ServiceAssociatedSystemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceAssociatedSystems> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>>

---


### Resiliencehubv2ServiceAssociatedSystemsOutputReference <a name="Resiliencehubv2ServiceAssociatedSystemsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceAssociatedSystemsOutputReference;

new Resiliencehubv2ServiceAssociatedSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn">resetSystemArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds">resetUserJourneyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSystemArn` <a name="resetSystemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn"></a>

```java
public void resetSystemArn()
```

##### `resetUserJourneyIds` <a name="resetUserJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds"></a>

```java
public void resetUserJourneyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput">systemArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput">userJourneyIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn">systemArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds">userJourneyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `systemArnInput`<sup>Optional</sup> <a name="systemArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput"></a>

```java
public java.lang.String getSystemArnInput();
```

- *Type:* java.lang.String

---

##### `userJourneyIdsInput`<sup>Optional</sup> <a name="userJourneyIdsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput"></a>

```java
public java.util.List<java.lang.String> getUserJourneyIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn"></a>

```java
public java.lang.String getSystemArn();
```

- *Type:* java.lang.String

---

##### `userJourneyIds`<sup>Required</sup> <a name="userJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds"></a>

```java
public java.util.List<java.lang.String> getUserJourneyIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceAssociatedSystems getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference;

new Resiliencehubv2ServiceEffectivePolicyValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo">availabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach">multiAzDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo">multiAzRpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto">multiAzRto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach">multiRegionDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo">multiRegionRpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto">multiRegionRto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilitySlo`<sup>Required</sup> <a name="availabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference getAvailabilitySlo();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a>

---

##### `multiAzDrApproach`<sup>Required</sup> <a name="multiAzDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference getMultiAzDrApproach();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a>

---

##### `multiAzRpo`<sup>Required</sup> <a name="multiAzRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference getMultiAzRpo();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a>

---

##### `multiAzRto`<sup>Required</sup> <a name="multiAzRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference getMultiAzRto();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a>

---

##### `multiRegionDrApproach`<sup>Required</sup> <a name="multiRegionDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference getMultiRegionDrApproach();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a>

---

##### `multiRegionRpo`<sup>Required</sup> <a name="multiRegionRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference getMultiRegionRpo();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a>

---

##### `multiRegionRto`<sup>Required</sup> <a name="multiRegionRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference getMultiRegionRto();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue"></a>

```java
public Resiliencehubv2ServiceEffectivePolicyValues getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a>

---


### Resiliencehubv2ServiceInputSourcesList <a name="Resiliencehubv2ServiceInputSourcesList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesList;

new Resiliencehubv2ServiceInputSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get"></a>

```java
public Resiliencehubv2ServiceInputSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceInputSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>>

---


### Resiliencehubv2ServiceInputSourcesOutputReference <a name="Resiliencehubv2ServiceInputSourcesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesOutputReference;

new Resiliencehubv2ServiceInputSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration">putResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration">resetResourceConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceConfiguration` <a name="putResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration"></a>

```java
public void putResourceConfiguration(Resiliencehubv2ServiceInputSourcesResourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---

##### `resetResourceConfiguration` <a name="resetResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration"></a>

```java
public void resetResourceConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput">resourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceConfiguration`<sup>Required</sup> <a name="resourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration"></a>

```java
public Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference getResourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a>

---

##### `resourceConfigurationInput`<sup>Optional</sup> <a name="resourceConfigurationInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput"></a>

```java
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfiguration getResourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceInputSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces">resetNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn"></a>

```java
public void resetClusterArn()
```

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces"></a>

```java
public void resetNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput"></a>

```java
public java.util.List<java.lang.String> getNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationEks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks">putEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn">resetCfnStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url">resetDesignFileS3Url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks">resetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl">resetTfStateFileUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEks` <a name="putEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks"></a>

```java
public void putEks(Resiliencehubv2ServiceInputSourcesResourceConfigurationEks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags"></a>

```java
public void putResourceTags(IResolvable|java.util.List<Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>>

---

##### `resetCfnStackArn` <a name="resetCfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn"></a>

```java
public void resetCfnStackArn()
```

##### `resetDesignFileS3Url` <a name="resetDesignFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url"></a>

```java
public void resetDesignFileS3Url()
```

##### `resetEks` <a name="resetEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks"></a>

```java
public void resetEks()
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetTfStateFileUrl` <a name="resetTfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl"></a>

```java
public void resetTfStateFileUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput">cfnStackArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput">designFileS3UrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput">eksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput">tfStateFileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn">cfnStackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url">designFileS3Url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks"></a>

```java
public Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference getEks();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a>

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags"></a>

```java
public Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList getResourceTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a>

---

##### `cfnStackArnInput`<sup>Optional</sup> <a name="cfnStackArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput"></a>

```java
public java.lang.String getCfnStackArnInput();
```

- *Type:* java.lang.String

---

##### `designFileS3UrlInput`<sup>Optional</sup> <a name="designFileS3UrlInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput"></a>

```java
public java.lang.String getDesignFileS3UrlInput();
```

- *Type:* java.lang.String

---

##### `eksInput`<sup>Optional</sup> <a name="eksInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput"></a>

```java
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationEks getEksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags> getResourceTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>>

---

##### `tfStateFileUrlInput`<sup>Optional</sup> <a name="tfStateFileUrlInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput"></a>

```java
public java.lang.String getTfStateFileUrlInput();
```

- *Type:* java.lang.String

---

##### `cfnStackArn`<sup>Required</sup> <a name="cfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn"></a>

```java
public java.lang.String getCfnStackArn();
```

- *Type:* java.lang.String

---

##### `designFileS3Url`<sup>Required</sup> <a name="designFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url"></a>

```java
public java.lang.String getDesignFileS3Url();
```

- *Type:* java.lang.String

---

##### `tfStateFileUrl`<sup>Required</sup> <a name="tfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```java
public java.lang.String getTfStateFileUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get"></a>

```java
public Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList;

new Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get"></a>

```java
public Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServicePermissionModelCrossAccountRoleArns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>>

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference;

new Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn">resetCrossAccountRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrossAccountRoleArn` <a name="resetCrossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn"></a>

```java
public void resetCrossAccountRoleArn()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput">crossAccountRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossAccountRoleArnInput`<sup>Optional</sup> <a name="crossAccountRoleArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput"></a>

```java
public java.lang.String getCrossAccountRoleArnInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `crossAccountRoleArn`<sup>Required</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn"></a>

```java
public java.lang.String getCrossAccountRoleArn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRoleArns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>

---


### Resiliencehubv2ServicePermissionModelOutputReference <a name="Resiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServicePermissionModelOutputReference;

new Resiliencehubv2ServicePermissionModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns">putCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns">resetCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName">resetInvokerRoleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossAccountRoleArns` <a name="putCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns"></a>

```java
public void putCrossAccountRoleArns(IResolvable|java.util.List<Resiliencehubv2ServicePermissionModelCrossAccountRoleArns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>>

---

##### `resetCrossAccountRoleArns` <a name="resetCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```java
public void resetCrossAccountRoleArns()
```

##### `resetInvokerRoleName` <a name="resetInvokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName"></a>

```java
public void resetInvokerRoleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput">crossAccountRoleArnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput">invokerRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossAccountRoleArns`<sup>Required</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns"></a>

```java
public Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList getCrossAccountRoleArns();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a>

---

##### `crossAccountRoleArnsInput`<sup>Optional</sup> <a name="crossAccountRoleArnsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServicePermissionModelCrossAccountRoleArns> getCrossAccountRoleArnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>>

---

##### `invokerRoleNameInput`<sup>Optional</sup> <a name="invokerRoleNameInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput"></a>

```java
public java.lang.String getInvokerRoleNameInput();
```

- *Type:* java.lang.String

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```java
public java.lang.String getInvokerRoleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServicePermissionModel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---


### Resiliencehubv2ServiceReportConfigurationOutputReference <a name="Resiliencehubv2ServiceReportConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceReportConfigurationOutputReference;

new Resiliencehubv2ServiceReportConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput">putReportOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput">resetReportOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReportOutput` <a name="putReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput"></a>

```java
public void putReportOutput(IResolvable|java.util.List<Resiliencehubv2ServiceReportConfigurationReportOutput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>>

---

##### `resetReportOutput` <a name="resetReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput"></a>

```java
public void resetReportOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput">reportOutput</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput">reportOutputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `reportOutput`<sup>Required</sup> <a name="reportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput"></a>

```java
public Resiliencehubv2ServiceReportConfigurationReportOutputList getReportOutput();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a>

---

##### `reportOutputInput`<sup>Optional</sup> <a name="reportOutputInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceReportConfigurationReportOutput> getReportOutputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceReportConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputList <a name="Resiliencehubv2ServiceReportConfigurationReportOutputList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceReportConfigurationReportOutputList;

new Resiliencehubv2ServiceReportConfigurationReportOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get"></a>

```java
public Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceReportConfigurationReportOutput> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference;

new Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3"></a>

```java
public void putS3(Resiliencehubv2ServiceReportConfigurationReportOutputS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3"></a>

```java
public Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input"></a>

```java
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutputS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference;

new Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath">resetBucketPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetBucketPath` <a name="resetBucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath"></a>

```java
public void resetBucketPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput">bucketPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath">bucketPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `bucketPathInput`<sup>Optional</sup> <a name="bucketPathInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput"></a>

```java
public java.lang.String getBucketPathInput();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `bucketPath`<sup>Required</sup> <a name="bucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath"></a>

```java
public java.lang.String getBucketPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutputS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---


### Resiliencehubv2ServiceTagsList <a name="Resiliencehubv2ServiceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceTagsList;

new Resiliencehubv2ServiceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get"></a>

```java
public Resiliencehubv2ServiceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Resiliencehubv2ServiceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>>

---


### Resiliencehubv2ServiceTagsOutputReference <a name="Resiliencehubv2ServiceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehubv2_service.Resiliencehubv2ServiceTagsOutputReference;

new Resiliencehubv2ServiceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Resiliencehubv2ServiceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>

---



