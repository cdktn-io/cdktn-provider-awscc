# `configOrganizationConformancePack` Submodule <a name="`configOrganizationConformancePack` Submodule" id="@cdktn/provider-awscc.configOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConformancePack <a name="ConfigOrganizationConformancePack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack awscc_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePack;

ConfigOrganizationConformancePack.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationConformancePackName(java.lang.String)
//  .conformancePackInputParameters(IResolvable|java.util.List<ConfigOrganizationConformancePackConformancePackInputParameters>)
//  .deliveryS3Bucket(java.lang.String)
//  .deliveryS3KeyPrefix(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ConfigOrganizationConformancePackTags>)
//  .templateBody(java.lang.String)
//  .templateS3Uri(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.organizationConformancePackName">organizationConformancePackName</a></code> | <code>java.lang.String</code> | The name of the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.conformancePackInputParameters">conformancePackInputParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>></code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>java.lang.String</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>java.lang.String</code> | The prefix for the delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>></code> | The tags for the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateS3Uri">templateS3Uri</a></code> | <code>java.lang.String</code> | Location of file containing the template body. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationConformancePackName`<sup>Required</sup> <a name="organizationConformancePackName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.organizationConformancePackName"></a>

- *Type:* java.lang.String

The name of the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}

---

##### `conformancePackInputParameters`<sup>Optional</sup> <a name="conformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.conformancePackInputParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>>

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}

---

##### `deliveryS3Bucket`<sup>Optional</sup> <a name="deliveryS3Bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3Bucket"></a>

- *Type:* java.lang.String

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}

---

##### `deliveryS3KeyPrefix`<sup>Optional</sup> <a name="deliveryS3KeyPrefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3KeyPrefix"></a>

- *Type:* java.lang.String

The prefix for the delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.excludedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>>

The tags for the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#tags ConfigOrganizationConformancePack#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

A string containing full conformance pack template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}

---

##### `templateS3Uri`<sup>Optional</sup> <a name="templateS3Uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateS3Uri"></a>

- *Type:* java.lang.String

Location of file containing the template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters">putConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetConformancePackInputParameters">resetConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket">resetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix">resetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri">resetTemplateS3Uri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConformancePackInputParameters` <a name="putConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters"></a>

```java
public void putConformancePackInputParameters(IResolvable|java.util.List<ConfigOrganizationConformancePackConformancePackInputParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConfigOrganizationConformancePackTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>>

---

##### `resetConformancePackInputParameters` <a name="resetConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetConformancePackInputParameters"></a>

```java
public void resetConformancePackInputParameters()
```

##### `resetDeliveryS3Bucket` <a name="resetDeliveryS3Bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket"></a>

```java
public void resetDeliveryS3Bucket()
```

##### `resetDeliveryS3KeyPrefix` <a name="resetDeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix"></a>

```java
public void resetDeliveryS3KeyPrefix()
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts"></a>

```java
public void resetExcludedAccounts()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody"></a>

```java
public void resetTemplateBody()
```

##### `resetTemplateS3Uri` <a name="resetTemplateS3Uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri"></a>

```java
public void resetTemplateS3Uri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePack;

ConfigOrganizationConformancePack.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePack;

ConfigOrganizationConformancePack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePack;

ConfigOrganizationConformancePack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePack;

ConfigOrganizationConformancePack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigOrganizationConformancePack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigOrganizationConformancePack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigOrganizationConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParameters">conformancePackInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList">ConfigOrganizationConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackArn">organizationConformancePackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList">ConfigOrganizationConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParametersInput">conformancePackInputParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput">deliveryS3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput">deliveryS3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackNameInput">organizationConformancePackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput">templateS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackName">organizationConformancePackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri">templateS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conformancePackInputParameters`<sup>Required</sup> <a name="conformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParameters"></a>

```java
public ConfigOrganizationConformancePackConformancePackInputParametersList getConformancePackInputParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList">ConfigOrganizationConformancePackConformancePackInputParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationConformancePackArn`<sup>Required</sup> <a name="organizationConformancePackArn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackArn"></a>

```java
public java.lang.String getOrganizationConformancePackArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tags"></a>

```java
public ConfigOrganizationConformancePackTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList">ConfigOrganizationConformancePackTagsList</a>

---

##### `conformancePackInputParametersInput`<sup>Optional</sup> <a name="conformancePackInputParametersInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParametersInput"></a>

```java
public IResolvable|java.util.List<ConfigOrganizationConformancePackConformancePackInputParameters> getConformancePackInputParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>>

---

##### `deliveryS3BucketInput`<sup>Optional</sup> <a name="deliveryS3BucketInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput"></a>

```java
public java.lang.String getDeliveryS3BucketInput();
```

- *Type:* java.lang.String

---

##### `deliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="deliveryS3KeyPrefixInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput"></a>

```java
public java.lang.String getDeliveryS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationConformancePackNameInput`<sup>Optional</sup> <a name="organizationConformancePackNameInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackNameInput"></a>

```java
public java.lang.String getOrganizationConformancePackNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConfigOrganizationConformancePackTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>>

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `templateS3UriInput`<sup>Optional</sup> <a name="templateS3UriInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput"></a>

```java
public java.lang.String getTemplateS3UriInput();
```

- *Type:* java.lang.String

---

##### `deliveryS3Bucket`<sup>Required</sup> <a name="deliveryS3Bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```java
public java.lang.String getDeliveryS3Bucket();
```

- *Type:* java.lang.String

---

##### `deliveryS3KeyPrefix`<sup>Required</sup> <a name="deliveryS3KeyPrefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```java
public java.lang.String getDeliveryS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationConformancePackName`<sup>Required</sup> <a name="organizationConformancePackName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackName"></a>

```java
public java.lang.String getOrganizationConformancePackName();
```

- *Type:* java.lang.String

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateS3Uri`<sup>Required</sup> <a name="templateS3Uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri"></a>

```java
public java.lang.String getTemplateS3Uri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConformancePackConfig <a name="ConfigOrganizationConformancePackConfig" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePackConfig;

ConfigOrganizationConformancePackConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organizationConformancePackName(java.lang.String)
//  .conformancePackInputParameters(IResolvable|java.util.List<ConfigOrganizationConformancePackConformancePackInputParameters>)
//  .deliveryS3Bucket(java.lang.String)
//  .deliveryS3KeyPrefix(java.lang.String)
//  .excludedAccounts(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ConfigOrganizationConformancePackTags>)
//  .templateBody(java.lang.String)
//  .templateS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.organizationConformancePackName">organizationConformancePackName</a></code> | <code>java.lang.String</code> | The name of the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.conformancePackInputParameters">conformancePackInputParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>></code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>java.lang.String</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>java.lang.String</code> | The prefix for the delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>></code> | The tags for the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri">templateS3Uri</a></code> | <code>java.lang.String</code> | Location of file containing the template body. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationConformancePackName`<sup>Required</sup> <a name="organizationConformancePackName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.organizationConformancePackName"></a>

```java
public java.lang.String getOrganizationConformancePackName();
```

- *Type:* java.lang.String

The name of the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}

---

##### `conformancePackInputParameters`<sup>Optional</sup> <a name="conformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.conformancePackInputParameters"></a>

```java
public IResolvable|java.util.List<ConfigOrganizationConformancePackConformancePackInputParameters> getConformancePackInputParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>>

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}

---

##### `deliveryS3Bucket`<sup>Optional</sup> <a name="deliveryS3Bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket"></a>

```java
public java.lang.String getDeliveryS3Bucket();
```

- *Type:* java.lang.String

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}

---

##### `deliveryS3KeyPrefix`<sup>Optional</sup> <a name="deliveryS3KeyPrefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```java
public java.lang.String getDeliveryS3KeyPrefix();
```

- *Type:* java.lang.String

The prefix for the delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConfigOrganizationConformancePackTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>>

The tags for the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#tags ConfigOrganizationConformancePack#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

A string containing full conformance pack template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}

---

##### `templateS3Uri`<sup>Optional</sup> <a name="templateS3Uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri"></a>

```java
public java.lang.String getTemplateS3Uri();
```

- *Type:* java.lang.String

Location of file containing the template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}

---

### ConfigOrganizationConformancePackConformancePackInputParameters <a name="ConfigOrganizationConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePackConformancePackInputParameters;

ConfigOrganizationConformancePackConformancePackInputParameters.builder()
//  .parameterName(java.lang.String)
//  .parameterValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}. |

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}.

---

### ConfigOrganizationConformancePackTags <a name="ConfigOrganizationConformancePackTags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePackTags;

ConfigOrganizationConformancePackTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#key ConfigOrganizationConformancePack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/config_organization_conformance_pack#value ConfigOrganizationConformancePack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConformancePackConformancePackInputParametersList <a name="ConfigOrganizationConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePackConformancePackInputParametersList;

new ConfigOrganizationConformancePackConformancePackInputParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get"></a>

```java
public ConfigOrganizationConformancePackConformancePackInputParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConfigOrganizationConformancePackConformancePackInputParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>>

---


### ConfigOrganizationConformancePackConformancePackInputParametersOutputReference <a name="ConfigOrganizationConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference;

new ConfigOrganizationConformancePackConformancePackInputParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterName"></a>

```java
public void resetParameterName()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput"></a>

```java
public java.lang.String getParameterValueInput();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigOrganizationConformancePackConformancePackInputParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>

---


### ConfigOrganizationConformancePackTagsList <a name="ConfigOrganizationConformancePackTagsList" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePackTagsList;

new ConfigOrganizationConformancePackTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get"></a>

```java
public ConfigOrganizationConformancePackTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConfigOrganizationConformancePackTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>>

---


### ConfigOrganizationConformancePackTagsOutputReference <a name="ConfigOrganizationConformancePackTagsOutputReference" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.config_organization_conformance_pack.ConfigOrganizationConformancePackTagsOutputReference;

new ConfigOrganizationConformancePackTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigOrganizationConformancePackTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>

---



